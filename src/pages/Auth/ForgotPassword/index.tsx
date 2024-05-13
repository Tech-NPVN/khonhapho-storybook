import { Form, InputForm } from '@/components/DataEntry';
import { Button, EmailIcon } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { z } from 'zod';

const FogotFormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Vui lòng không bỏ trống.',
    })
    .email({ message: 'Không đúng định dạng email' }),
});

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [theme] = useOutletContext<any>();

  const formForgot = useForm<z.infer<typeof FogotFormSchema>>({
    resolver: zodResolver(FogotFormSchema),
    defaultValues: {
      email: '',
    },
  });

  return (
    <Form {...formForgot}>
      <form
        onSubmit={formForgot.handleSubmit((data) => console.log(data))}
        className="w-[320px] md:w-[380px] h-auto bg-white dark:bg-primaryColorDark rounded-xl p-6"
      >
        <div className="flex w-full justify-center mb-10 mt-6">
          <img
            src={theme === 'light' ? '/nhapho-icon.png' : '/nhapho-icon-dark.png'}
            alt="nhapho-icon"
          />
        </div>

        <div className="flex flex-col gap-4">
          <InputForm<z.infer<typeof FogotFormSchema>>
            name="email"
            className="h-[52px]"
            placeholder="Số điện thoại hoặc CCCD"
            prefixIcon={<EmailIcon />}
            description="Bạn sẽ nhận link xác thực lấy lại mật khẩu qua email này"
            sizeInput="large"
            required
          />

          <div className="w-full mt-3">
            <Button type="submit" className="text-md mb-4">
              Gửi
            </Button>
            <Button
              type="button"
              variant="ghostBlue"
              className="text-md font-normal"
              onClick={() => navigate(-1)}
            >
              Trở lại trang dăng nhập
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
