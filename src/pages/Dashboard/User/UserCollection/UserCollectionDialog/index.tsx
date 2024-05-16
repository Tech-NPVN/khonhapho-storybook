import { Form, InputForm, Upload } from '@/components/DataEntry';
import { Modal } from '@/components/Feedback';
import { Button, Typography } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type UserCollectionDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  type?: 'create' | 'update';
};

const CreateCollectionSchema = z.object({
  name: z.string().min(1, { message: 'Vui lòng không bỏ trống!' }),
  thumbsCollection: z.string().optional(),
});

type CreateFormType = z.infer<typeof CreateCollectionSchema>;

export const UserCollectionCreateOrUpdate = ({
  open,
  setOpen,
  type = 'create',
}: UserCollectionDialogProps) => {
  const [previewImage, setPreviewImage] = useState<string[]>([]);

  const createCollectionForm = useForm<CreateFormType>({
    resolver: zodResolver(CreateCollectionSchema),
    defaultValues: {
      name: '',
      thumbsCollection: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Filelist = e.target.files;

    setPreviewImage((prev: string[]) => {
      const files = Object.values(Filelist as FileList).map((file) => {
        return URL.createObjectURL(file);
      });
      return [...prev, ...files];
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const Filelist = e.dataTransfer.files;
    setPreviewImage((prev: string[]) => {
      const files = Object.values(Filelist).map((file) => {
        return URL.createObjectURL(file);
      });
      return [...prev, ...files];
    });
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      title={`${type === 'create' ? 'Tạo' : 'Sửa'} bộ sưu tập`}
      className="min-w-[350px] max-w-[510px]"
      isDivided={false}
      disableInteractOutside
      centered
    >
      <Form {...createCollectionForm}>
        <form onSubmit={createCollectionForm.handleSubmit((data) => console.log(data))}>
          {type === 'update' && (
            <div className="flex flex-col items-center justify-center mb-8">
              <Typography variant="p" className="text-base font-semibold mb-2">
                Ảnh đại diện
              </Typography>
              <Upload
                previewImage={previewImage}
                setPreviewImage={setPreviewImage}
                onChange={handleChange as any}
                onDrop={handleDrop as any}
              />
            </div>
          )}

          <InputForm<CreateFormType>
            name="name"
            placeholder="Nhập tên bộ sưu tập"
            className="rounded-lg"
          />

          <div className="flex justify-end gap-3 mt-6">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
              Đóng
            </Button>
            <Button type="submit">Tạo</Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
