import { Form, InputFormPassword } from '@/components/DataEntry';
import { Modal } from '@/components/Feedback';
import { Button } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const ChangePwFormSchema = z
  .object({
    oldPassword: z.string().min(8, 'Ít nhất 8 ký tự'),
    newPassword: z.string().min(8, 'Ít nhất 8 ký tự'),
    confirmPassword: z.string().min(8, 'Ít nhất 8 ký tự'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Mật khẩu không trùng khớp!',
    path: ['confirmPassword'],
  });

type Form = z.infer<typeof ChangePwFormSchema>;

export const UserChangePassword = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const changePwForm = useForm<Form>({
    resolver: zodResolver(ChangePwFormSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      title="Đổi mật khẩu"
      className="max-w-[510px] !px-3"
      isDivided={false}
      centerTitle
      disableInteractOutside
    >
      <Form {...changePwForm}>
        <form onSubmit={changePwForm.handleSubmit((data) => console.log(data))}>
          <InputFormPassword<Form>
            name="oldPassword"
            className="rounded-lg dark:border-0"
            cnItem="mb-6"
            label="Mật khẩu cũ"
            required
          />
          <InputFormPassword<Form>
            name="newPassword"
            className="rounded-lg dark:border-0"
            cnItem="mb-6"
            label="Mật khẩu mới"
            required
          />
          <InputFormPassword<Form>
            name="confirmPassword"
            className="rounded-lg dark:border-0"
            cnItem="mb-6"
            label="Xác nhận mật khẩu mới"
            required
          />

          <div className="flex justify-center mb-8">
            <Button type="submit" className="w-fit px-10 ">
              Xác nhận
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
