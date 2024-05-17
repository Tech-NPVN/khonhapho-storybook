import { CheckboxForm, Form, InputForm, TextareaForm, Upload } from '@/components/DataEntry';
import { Modal } from '@/components/Feedback';
import { AddIcon, Button, Typography } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type UserCollectionDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  type?: 'create' | 'update';
};

/**
 * Create Or Update Collection Form
 */
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
                className="!h-36 !w-36 !rounded-full !border-2"
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

/**
 * Save To Collection Form
 */
const SaveToCollectionSchema = z.object({
  collections: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

type SaveCollectionType = z.infer<typeof SaveToCollectionSchema>;

export const UserSaveToCollection = ({
  open,
  setOpen,
}: Omit<UserCollectionDialogProps, 'type'>) => {
  const saveToCollectionForm = useForm<SaveCollectionType>({
    resolver: zodResolver(SaveToCollectionSchema),
    defaultValues: {
      collections: [],
    },
  });

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      title="Lưu vào bộ sưu tập"
      className="min-w-[350px] max-w-[510px] !px-7"
      isDivided={false}
      disableInteractOutside
      centered
    >
      <Form {...saveToCollectionForm}>
        <form onSubmit={saveToCollectionForm.handleSubmit((data) => console.log(data))}>
          <div className="min-h-72">
            <CheckboxForm<SaveCollectionType>
              name="collections"
              className="rounded-lg"
              cnGroupStyle="flex justify-between items-center"
              variant="green"
              groupStyle={
                <div className="bg-transparent py-2 cursor-pointer flex items-center gap-5 transition-all hover:bg-dividerLight/20">
                  <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-tertiaryColorLight dark:text-white dark:bg-tertiaryColorDark">
                    M
                  </div>
                  <Typography variant="p" className="text-sm font-semibold">
                    Mặc định
                  </Typography>
                </div>
              }
              options={[
                {
                  value: 'a',
                },
                {
                  value: 'b',
                },
                {
                  value: 'c',
                },
              ]}
            />
          </div>

          <div className="flex items-center gap-5 cursor-pointer">
            <button
              className="w-10 h-10 flex items-center justify-center p-2 rounded-full bg-tertiaryColorLight dark:text-white dark:bg-tertiaryColorDark"
              type="button"
            >
              <AddIcon width="20" height="20" className="dark:[&>path]:fill-white" />
            </button>
            <Typography variant="h5" className="font-semibold">
              Tạo bộ sưu tập
            </Typography>
          </div>

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

/**
 * Note Collection Form
 */
const NoteCollectionSchema = z.object({
  content: z.string().optional(),
  images: z.array(z.string()).optional(),
});

type NoteCollectionType = z.infer<typeof NoteCollectionSchema>;

export const UserCollectionNoteForm = ({
  open,
  setOpen,
}: Omit<UserCollectionDialogProps, 'type'>) => {
  const [previewImage, setPreviewImage] = useState<string[]>([]);

  const noteCollectionForm = useForm<NoteCollectionType>({
    resolver: zodResolver(NoteCollectionSchema),
    defaultValues: {
      content: '',
      images: [],
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
      title="Ghi chú"
      className="min-w-[350px] max-w-[510px] !px-7"
      isDivided={false}
      disableInteractOutside
      centered
    >
      <Form {...noteCollectionForm}>
        <form onSubmit={noteCollectionForm.handleSubmit((data) => console.log(data))}>
          <TextareaForm<NoteCollectionType>
            name="content"
            placeholder="Nhập nội dung"
            label="Nội dung"
            minRows={6}
            className="mb-3"
          />

          <div className="mb-8 w-full">
            <Typography variant="p" className="text-sm mb-2">
              Ảnh(tối đa 6 ảnh)
            </Typography>
            <Upload
              previewImage={previewImage}
              setPreviewImage={setPreviewImage}
              onChange={handleChange as any}
              onDrop={handleDrop as any}
              className="!h-28 !w-28 !border-2"
            />
          </div>

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
