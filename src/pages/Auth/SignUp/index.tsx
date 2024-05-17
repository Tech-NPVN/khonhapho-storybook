import { Form, InputForm, InputFormPassword } from '@/components/DataEntry';
import { Button } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { z } from 'zod';

const SignUpFormSchema = z.object({});

export const SignUp = () => {
  const navigate = useNavigate();
  const [theme] = useOutletContext<any>();

  const formSignUp = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {},
  });

  return (
    <Form {...formSignUp}>
      <form
        onSubmit={formSignUp.handleSubmit((data) => console.log(data))}
        className="w-full md:w-[520px] h-auto bg-white dark:bg-primaryColorDark rounded-xl p-6"
      >
        <div className="flex justify-center w-full mt-6 mb-10">
          <img
            src={theme === 'light' ? '/nhapho-icon.png' : '/nhapho-icon-dark.png'}
            alt="nhapho-icon"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputForm name="name" label="Họ và tên" required className="rounded-lg" />
          <InputForm name="phoneNumbers" label="Số điện thoại" required className="rounded-lg" />
          <InputForm name="identity" label="Căn cước công dân" className="rounded-lg" />
          <InputForm name="formDate" label="Ngày cấp" required className="rounded-lg" />
          <InputForm name="address" label="Địa chỉ thường chú" required className="rounded-lg" />
          <InputForm name="addressCurrent" label="Nơi ở hiện tại" className="rounded-lg" />
          <InputForm name="email" label="Email" required className="rounded-lg" />
          <InputForm name="phoneNumbersFamilier" label="SĐT người thân" className="rounded-lg" />
          <InputFormPassword name="password" label="Mật khẩu" required className="rounded-lg" />
          <InputFormPassword
            name="rePassword"
            label="Nhập lại mật khẩu"
            required
            className="rounded-lg"
          />
          <InputForm name="birth" label="Ngày sinh" required className="rounded-lg" />
          <InputForm
            name="facebookUrl"
            label="Link facebook cá nhân"
            placeholder="https:/www.facebook.com..."
            className="rounded-lg"
          />
        </div>

        <div className="w-full mt-10">
          <Button type="submit" className="w-full mb-4 text-md">
            Đăng ký
          </Button>
          <Button
            type="button"
            variant="ghostBlue"
            className="w-full font-normal text-md"
            onClick={() => navigate(-1)}
          >
            Trở về đăng nhập
          </Button>
        </div>
      </form>
    </Form>
  );
};
