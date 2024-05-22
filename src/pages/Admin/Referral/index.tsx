import { Form, IOption, SelectForm } from '@/components/DataEntry';
import { Modal } from '@/components/Feedback';
import { AddIcon, Button, Typography } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import ReferralList from './ReferralList';

const branchOptions = [
  { label: 'Nhà Phố Việt Nam - Hà Nội', value: '1' },
  { label: 'Nhà Phố Việt Nam - Đà Nẵng', value: '2' },
  { label: 'Nhà Phố Việt Nam - Hồ Chí Minh', value: '3' },
] as IOption[];

const departmentOptions = [
  { label: 'IT', value: '1' },
  { label: 'MKT', value: '2' },
  { label: 'Sale', value: '3' },
] as IOption[];

const groupOptions = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
] as IOption[];

const formOption = {
  value: z.string(),
  label: z.string(),
};

export const Referral = () => {
  const [isShowCreateCode, setIsShowCreateCode] = useState<boolean>(false);

  const FormSchema = z.object({
    branch: z.object(formOption, { message: 'Bạn phải chọn mục này' }),
    department: z.object(formOption, { message: 'Bạn phải chọn mục này' }),
    group: z.object(formOption, { message: 'Bạn phải chọn mục này' }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <>
      <div className="w-full">
        <div className="px-5 py-3 rounded-lg bg-white dark:bg-primaryColorDark">
          <div className="flex items-center justify-between pb-3">
            <Typography variant="h2" className="text-sm font-semibold dark:text-white">
              Duyệt kho hàng
            </Typography>
            <Button
              onClick={() => setIsShowCreateCode(true)}
              startIcon={<AddIcon color="#fff" className="w-[16px] h-[16px]" />}
            >
              Thêm mới
            </Button>
          </div>
          <div className="w-[calc(100%+40px)] ml-[-20px] h-[1px] bg-[rgba(217,217,217,0.5)]"></div>
          <div>
            <ReferralList />
          </div>
        </div>
      </div>
      <Modal
        open={isShowCreateCode}
        onCancel={() => setIsShowCreateCode(false)}
        title="Tạo mã"
        className="max-w-[512px] w-full !p-5"
        isDivided={false}
        styleTitle="normal-case font-semibold text-base textPrimaryLight dark:text-textPrimaryDark"
        disableInteractOutside
      >
        <div>
          <Form {...form}>
            <form
              className="flex flex-col"
              onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}
            >
              <div className="mb-3 w-full">
                <SelectForm<z.infer<typeof FormSchema>>
                  name="branch"
                  options={branchOptions}
                  placeholder="Chọn chi nhánh"
                  className="rounded-[10px]"
                  label="Chi nhánh"
                  required
                />
              </div>
              <div className="mb-3 w-full">
                <SelectForm<z.infer<typeof FormSchema>>
                  name="department"
                  options={departmentOptions}
                  placeholder="Chọn phòng ban"
                  className="rounded-[10px]"
                  label="Phòng ban"
                  required
                />
              </div>
              <div className="mb-3 w-full">
                <SelectForm<z.infer<typeof FormSchema>>
                  name="group"
                  options={groupOptions}
                  placeholder="Chọn nhóm"
                  className="rounded-[10px]"
                  label="Nhóm"
                  required
                  disabled={!form.watch('branch') || !form.watch('department')}
                />
              </div>

              <div className="flex items-center justify-end">
                <Button type="submit">Tạo mã</Button>
              </div>
            </form>
          </Form>
        </div>
      </Modal>
    </>
  );
};
