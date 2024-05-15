import { Form, InputForm } from '@/components/DataEntry';
import { Modal } from '@/components/Feedback';
import { Button } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const EditProfileFormSchema = z.object({
  displayName: z.string().min(1, { message: 'Vui lòng không bỏ trống!' }),
  fullName: z.string().optional(),
  identity: z.number().optional(),
  effectiveDataId: z.string().min(1, { message: 'Vui lòng không bỏ trống!' }),
  email: z
    .string({ message: 'Vui lòng không bỏ trống!' })
    .email({ message: 'Không đúng định dạng email!' }),
  facebookUrl: z.string().optional(),
  birthdate: z.string().min(1, { message: 'Vui lòng không bỏ trống!' }),
  phoneNumber: z.string().min(1, { message: 'Vui lòng không bỏ trống!' }),
  phoneNumberFamilier: z.string().min(1, { message: 'Vui lòng không bỏ trống!' }),
  address: z.string().min(1, { message: 'Vui lòng không bỏ trống!' }),
  addressCurrent: z.string().min(1, { message: 'Vui lòng không bỏ trống!' }),
});

type Form = z.infer<typeof EditProfileFormSchema>;

export const UserEditProfile = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const editProfileForm = useForm<Form>({
    resolver: zodResolver(EditProfileFormSchema),
    defaultValues: {
      displayName: 'Nhà Phố Việt Nam',
      fullName: 'Nhà Phố Việt Nam',
      identity: 123456789002,
      effectiveDataId: '12/06/2018',
      address: '102 Thái Thịnh- Đống Đa- Hà Nội',
      addressCurrent: '102 Thái Thịnh- Đống Đa- Hà Nội',
      email: 'nhaphovietnam@gmail.com',
      birthdate: '10/02/2000',
      phoneNumber: '0123456789',
      phoneNumberFamilier: '0123456789',
      facebookUrl: 'https://www.facebook.com/nhaphovietnam',
    },
  });

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      title="Chỉnh sửa hồ sơ"
      className="max-w-[680px] !px-3"
      isDivided={false}
      centerTitle
      disableInteractOutside
    >
      <Form {...editProfileForm}>
        <form onSubmit={editProfileForm.handleSubmit((data) => console.log(data))}>
          <div className="grid grid-cols-2 gap-x-[18px] gap-y-[28px] mb-[28px]">
            <InputForm<Form>
              name="displayName"
              className="rounded-lg dark:border-0"
              label="Tên hiển thị"
              required
            />

            <InputForm<Form>
              name="birthdate"
              className="rounded-lg dark:border-0"
              label="Ngày sinh"
              required
            />

            <InputForm<Form>
              name="fullName"
              className="rounded-lg dark:border-0"
              label="Họ và tên"
              required
              disabled
            />

            <InputForm<Form>
              name="phoneNumber"
              className="rounded-lg dark:border-0"
              label="Số điện thoại"
              required
            />

            <InputForm<Form>
              name="identity"
              className="rounded-lg dark:border-0"
              label="Căn cước công dân"
              required
              disabled
            />

            <InputForm<Form>
              name="effectiveDataId"
              className="rounded-lg dark:border-0"
              label="Ngày cấp"
              required
            />

            <InputForm<Form>
              name="address"
              className="rounded-lg dark:border-0"
              label="Địa chỉ thường chú"
              required
            />

            <InputForm<Form>
              name="addressCurrent"
              className="rounded-lg dark:border-0"
              label="Địa chỉ hiện tại"
              required
            />

            <InputForm<Form>
              name="email"
              className="rounded-lg dark:border-0"
              label="Email"
              required
            />

            <InputForm<Form>
              name="phoneNumberFamilier"
              className="rounded-lg dark:border-0"
              label="SĐT người thân"
              required
            />

            <InputForm<Form>
              name="facebookUrl"
              className="rounded-lg dark:border-0"
              label="Facebook"
              required
            />
          </div>

          <div className="flex justify-center mb-8">
            <Button type="submit" className="w-fit px-10 ">
              Cập nhật
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
