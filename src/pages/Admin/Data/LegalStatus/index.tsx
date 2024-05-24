import { Form, Input, InputForm, RequiredSymbolLabel } from '@/components/DataEntry';
import { Modal } from '@/components/Feedback';
import { AddIcon, Button, SearchIcon, Typography } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formLegalStatus = z.object({
  name: z.string({ message: 'Bạn phải mục chọn này' }),
  code: z.string({ message: 'Bạn phải mục chọn này' }),
  description: z.string({ message: 'Bạn phải mục chọn này' }),
  order: z.string({ message: 'Bạn phải mục chọn này' }),
});

export const LegalStatus = () => {
  const [showModalAdd, setshowModalAdd] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formLegalStatus>>({
    resolver: zodResolver(formLegalStatus),
    defaultValues: {},
  });

  const handleModal = () => {
    setshowModalAdd((prev) => !prev);
  };
  return (
    <div className="rounded-lg bg-primaryColorLight dark:bg-primaryColorDark">
      <div className="flex items-center justify-between px-6 py-3">
        <Typography
          variant="h2"
          className="text-base text-textPrimaryLight dark:text-textPrimaryDark"
        >
          Tình trạng pháp lý
        </Typography>
        <Button className="h-8 px-4 py-1" onClick={handleModal}>
          <AddIcon width="20" color="white" />
          <span>Thêm mới</span>
        </Button>
      </div>

      <Modal open={showModalAdd} onCancel={handleModal} className="md:w-[520px] w-full mx-5">
        <Typography
          variant="h3"
          className="mt-3 text-base text-textPrimaryLight dark:text-textPrimaryDark"
        >
          Thêm tình trạng pháp lý
        </Typography>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => console.log(data))}
            className="flex flex-col gap-3 mt-3"
          >
            <div className="flex items-center justify-between w-full gap-5 mt-5">
              <label className="text-sm line-clamp-1 md:w-[95px]" htmlFor="name">
                <RequiredSymbolLabel />
                Tên pháp lý :
              </label>
              <div className="flex-1">
                <InputForm<z.infer<typeof formLegalStatus>>
                  id="name"
                  name="name"
                  className="flex-1 w-full rounded-md"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 mt-5">
              <label className="text-sm line-clamp-1 md:w-[95px]" htmlFor="code">
                <RequiredSymbolLabel />
                Mã :
              </label>
              <div className="flex-1">
                <InputForm<z.infer<typeof formLegalStatus>>
                  id="code"
                  name="code"
                  className="flex-1 w-full rounded-md"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 mt-5">
              <label className="text-sm line-clamp-1 md:w-[95px] flex gap-1" htmlFor="description">
                <span className="text-transparent">*</span>
                Mô tả :
              </label>
              <div className="flex-1">
                <InputForm<z.infer<typeof formLegalStatus>>
                  id="description"
                  name="description"
                  className="flex-1 w-full rounded-md"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 mt-5">
              <label className="text-sm line-clamp-1 md:w-[95px] flex gap-1" htmlFor="order">
                <span className="text-transparent">*</span>
                Thứ tự :
              </label>
              <div className="flex-1">
                <InputForm<z.infer<typeof formLegalStatus>>
                  id="order"
                  name="order"
                  className="flex-1 w-full rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-end w-full gap-5 mt-3 ">
              <Button type="submit" className="w-[72px] h-10">
                Thêm
              </Button>
            </div>
          </form>
        </Form>
      </Modal>
      <div className="w-full h-[1px] bg-black/5 dark:bg-white/10"></div>
      <div>
        <div className="flex items-center justify-end w-full p-5 bg-white dark:bg-primaryColorDark">
          <div className="flex w-full md:w-[294px]">
            <Input
              className="rounded-e-none bg-secondaryColorLight dark:bg-secondaryColorDark "
              placeholder="Điền từ khoá tìm kiếm"
            />
            <button className="flex items-center justify-center w-10 h-10 rounded-s-none bg-primaryButtonLight rounded-e-lg">
              <SearchIcon color="white" />
            </button>
          </div>
        </div>
        <table></table>
      </div>
    </div>
  );
};
