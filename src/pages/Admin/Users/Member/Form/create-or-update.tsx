import { RequiredSymbol } from '@/common/components';
import { Form, InputForm, SelectForm } from '@/components/DataEntry';
import { Modal } from '@/components/Feedback';
import { Button, Typography } from '@/components/General';
import { REQUIRED } from '@/constants/data';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const CreateOrUpdateSchema = z.object({
  displayName: z.string().min(1, REQUIRED),
  name: z.string().min(1, REQUIRED),
  birthDate: z.string().min(1, REQUIRED),
  phone: z.string().min(10, 'Số điện thoại gồm 10 số').max(10, 'Số điện thoại gồm 10 số'),
  phoneFamilier: z.string().min(10, 'Số điện thoại gồm 10 số').max(10, 'Số điện thoại gồm 10 số'),
  email: z.string().min(1, REQUIRED).email('Không đúng định dạng email!'),
  identity: z.string().min(1, REQUIRED),
  effectivelyIdDate: z.string().min(1, REQUIRED),
  addressCurrent: z.string().min(1, REQUIRED),
  address: z.string().min(1, REQUIRED),
  branch: z.string().min(1, REQUIRED),
  department: z.string().min(1, REQUIRED),
  role: z.string().min(1, REQUIRED),
});

type Form = z.infer<typeof CreateOrUpdateSchema>;

export const CreateOrUpdate = ({
  open,
  setOpen,
  type = 'create',
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  type?: 'create' | 'update';
}) => {
  const createOrUpdateForm = useForm<Form>({
    resolver: zodResolver(CreateOrUpdateSchema),
    defaultValues: {
      displayName: '',
      name: '',
      birthDate: '',
      phone: '',
      phoneFamilier: '',
      email: '',
      identity: '',
      effectivelyIdDate: '',
      addressCurrent: '',
      address: '',
      branch: '',
      department: '',
      role: '',
    },
  });

  const { handleSubmit } = createOrUpdateForm;

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      title={`${type === 'create' ? 'Tạo người dùng' : 'Xem/sửa người dùng'}`}
      className="min-w-[350px] max-w-[680px] overflow-auto"
      isDivided={false}
      centered
      disableInteractOutside
    >
      <Form {...createOrUpdateForm}>
        <form onSubmit={handleSubmit((data) => console.log(data))} className="pt-4">
          <div className="grid grid-cols-8 items-center mb-5">
            <div className="col-span-2 flex">
              <RequiredSymbol />
              <Typography variant="p" className="text-sm">
                Tên hiển thị:{' '}
              </Typography>
            </div>
            <div className="col-span-6">
              <InputForm<Form>
                name="displayName"
                placeholder="Nhập tên hiển thị"
                className="rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-8 items-center mb-5">
            <div className="col-span-2 flex">
              <RequiredSymbol />
              <Typography variant="p" className="text-sm">
                Họ tên:{' '}
              </Typography>
            </div>
            <div className="col-span-6">
              <InputForm<Form> name="name" placeholder="Nhập họ tên" className="rounded-md" />
            </div>
          </div>

          <div className="grid grid-cols-8 items-center mb-5">
            <div className="col-span-2 flex">
              <RequiredSymbol />
              <Typography variant="p" className="text-sm">
                Ngày sinh:{' '}
              </Typography>
            </div>
            <div className="col-span-6">
              <InputForm<Form>
                name="birthDate"
                placeholder="Nhập ngày sinh"
                className="rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-8 items-center mb-5">
            <div className="col-span-2 flex">
              <RequiredSymbol />
              <Typography variant="p" className="text-sm">
                Số điện thoại:{' '}
              </Typography>
            </div>
            <div className="col-span-6">
              <InputForm<Form>
                name="phone"
                placeholder="Nhập số điện thoại"
                className="rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-8 items-center mb-5">
            <div className="col-span-2 flex">
              <RequiredSymbol />
              <Typography variant="p" className="text-sm">
                SĐT người thân:{' '}
              </Typography>
            </div>
            <div className="col-span-6">
              <InputForm<Form>
                name="phoneFamilier"
                placeholder="Nhập SĐT người thân"
                className="rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-8 items-center mb-5">
            <div className="col-span-2 flex">
              <RequiredSymbol />
              <Typography variant="p" className="text-sm">
                Email:{' '}
              </Typography>
            </div>
            <div className="col-span-6">
              <InputForm<Form> name="email" placeholder="Nhập email" className="rounded-md" />
            </div>
          </div>

          <div className="grid grid-cols-8 items-center mb-5">
            <div className="col-span-2 flex">
              <RequiredSymbol />
              <Typography variant="p" className="text-sm">
                CCCD:{' '}
              </Typography>
            </div>
            <div className="col-span-6">
              <InputForm<Form> name="identity" placeholder="Nhập CCCD" className="rounded-md" />
            </div>
          </div>

          <div className="grid grid-cols-8 items-center mb-5">
            <div className="col-span-2 flex">
              <RequiredSymbol />
              <Typography variant="p" className="text-sm">
                Ngày cấp CCCD:{' '}
              </Typography>
            </div>
            <div className="col-span-6">
              <InputForm<Form>
                name="effectivelyIdDate"
                placeholder="Nhập ngày cấp CCCD"
                className="rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-8 items-center mb-5">
            <div className="col-span-2 flex">
              <RequiredSymbol />
              <Typography variant="p" className="text-sm">
                Dịa chỉ:{' '}
              </Typography>
            </div>
            <div className="col-span-6">
              <InputForm<Form> name="address" placeholder="Nhập địa chỉ" className="rounded-md" />
            </div>
          </div>

          <div className="grid grid-cols-8 items-center mb-5">
            <div className="col-span-2 flex">
              <RequiredSymbol />
              <Typography variant="p" className="text-sm">
                Dịa chỉ thường trú:{' '}
              </Typography>
            </div>
            <div className="col-span-6">
              <InputForm<Form>
                name="addressCurrent"
                placeholder="Nhập địa chỉ thường trusF"
                className="rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-8 items-center mb-5">
            <div className="col-span-2 flex">
              <RequiredSymbol />
              <Typography variant="p" className="text-sm">
                Chi nhánh:{' '}
              </Typography>
            </div>
            <div className="col-span-6">
              <SelectForm<Form> name="branch" placeholder="Chọn chi nhánh" />
            </div>
          </div>

          <div className="grid grid-cols-8 items-center mb-5">
            <div className="col-span-2 flex">
              <RequiredSymbol />
              <Typography variant="p" className="text-sm">
                Phòng ban:{' '}
              </Typography>
            </div>
            <div className="col-span-6">
              <SelectForm<Form> name="department" placeholder="Chọn phòng ban" />
            </div>
          </div>

          <div className="grid grid-cols-8 items-center mb-5">
            <div className="col-span-2 flex">
              <RequiredSymbol />
              <Typography variant="p" className="text-sm">
                Chức danh:{' '}
              </Typography>
            </div>
            <div className="col-span-6">
              <SelectForm<Form> name="role" placeholder="Chọn chức danh" />
            </div>
          </div>

          <div className="grid grid-cols-8 items-center mb-5">
            <div className="col-start-3 col-span-6">
              <Button variant="default" className="w-full text-base" type="submit">
                {type === 'create' ? 'Tạo' : 'Lưu'}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
