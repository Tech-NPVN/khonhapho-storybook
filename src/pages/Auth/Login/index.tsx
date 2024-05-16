import { CheckboxForm, Form, InputForm, InputFormPassword } from '@/components/DataEntry';
import { Button, LockIcon, UserIcon } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { z } from 'zod';

const LoginFormSchema = z.object({
  username: z.string().min(1, {
    message: 'Vui lòng không bỏ trống.',
  }),
  password: z.string().min(1, {
    message: 'Vui lòng không bỏ trống.',
  }),
});

export const Login = () => {
  const navigate = useNavigate();
  const [theme] = useOutletContext<any>();

  const formLogin = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <Form {...formLogin}>
      <form
        onSubmit={formLogin.handleSubmit((data) => console.log(data))}
        className="w-[320px] md:w-[380px] h-auto bg-white dark:bg-primaryColorDark rounded-xl p-6"
      >
        <div className="flex w-full justify-center mb-10 mt-6">
          <img
            src={theme === 'light' ? '/nhapho-icon.png' : '/nhapho-icon-dark.png'}
            alt="nhapho-icon"
          />
        </div>

        <div className="flex flex-col gap-4">
          <InputForm<z.infer<typeof LoginFormSchema>>
            name="username"
            className="h-[52px]"
            placeholder="Số điện thoại hoặc CCCD"
            prefixIcon={<UserIcon />}
            sizeInput="large"
            required
          />

          <InputFormPassword<z.infer<typeof LoginFormSchema>>
            name="password"
            className="h-[52px]"
            placeholder="Mật khẩu"
            prefixIcon={<LockIcon />}
            required
          />

          <CheckboxForm name="" label="Lưu mật khẩu" className="text-[13px]" />

          <div className="w-full">
            <Button type="submit" className="text-md mb-1 w-full">
              Đăng nhập
            </Button>
            <Button
              type="button"
              variant="ghostBlue"
              className="text-md font-normal w-full"
              onClick={() => navigate('/forgot-password')}
            >
              Quên mật khẩu
            </Button>
          </div>
        </div>

        <hr className="bg-dividerLight dark:bg-textSecondaryDark dark:opacity-40 w-full h-[1px] mt-10 mb-6" />

        <div className="w-full">
          <Button
            type="button"
            variant="outlineRed"
            className="text-md w-full"
            onClick={() => navigate('/sign-up')}
          >
            Tạo tài khoản
          </Button>
        </div>
      </form>
    </Form>
  );
};
