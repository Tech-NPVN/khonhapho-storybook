import { DeleteIcon } from '@/components/General';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Upload } from '.';

const meta: Meta<typeof Upload> = {
  title: 'Data Entry/Upload',
  component: Upload,
  tags: ['autodocs'],
  args: {
    multiple: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ListUpload: Story = {
  render: () => {
    const [previewImage, setPreviewImage] = useState<string[]>([]);
    const [urlImage, setUrlImage] = useState<FileList>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const Filelist = e.target.files;

      setPreviewImage((prev: string[]) => {
        const files = Object.values(Filelist as FileList).map((file) => {
          return URL.createObjectURL(file);
        });
        return [...prev, ...files];
      });
      setUrlImage(
        (prev) =>
          ({
            ...prev,
            ...Filelist,
          }) as FileList,
      );
    };

    const handleDeleteImage = (index: number) => {
      setPreviewImage((prev) => {
        const newImages = prev.filter((image, i) => i !== index);
        return newImages;
      });
      setUrlImage((prev) => {
        return {
          ...(prev ? Object.values(prev).filter((image, i) => i !== index) : {}),
        } as FileList;
      });
    };

    const handleOnDrop = (e: React.DragEvent) => {
      e.preventDefault();
      const Filelist = e.dataTransfer.files;
      setPreviewImage((prev: string[]) => {
        const files = Object.values(Filelist).map((file) => {
          return URL.createObjectURL(file);
        });
        return [...prev, ...files];
      });
      setUrlImage(
        (prev) =>
          ({
            ...prev,
            ...Filelist,
          }) as FileList,
      );
    };

    return (
      <div className="flex gap-2">
        {previewImage.map((image, i) => (
          <div
            className="cursor-pointer flex items-center justify-center border w-[200px] h-[200px] rounded-lg relative overflow-hidden group p-2"
            key={image}
          >
            <img src={image} alt="" />
            <div className="absolute inset-0">
              <button
                type="button"
                className="absolute flex items-center justify-center invisible w-10 h-10 text-center text-red-600 transition-all -translate-x-1/2 -translate-y-1/2 bg-white rounded-full opacity-0 cursor-pointer top-1/2 left-1/2 z-100 group-hover:opacity-100 group-hover:visible"
                onClick={() => handleDeleteImage(i)}
              >
                <DeleteIcon color="" className="fill-errorLight" />
              </button>
            </div>
          </div>
        ))}
        <Upload
          previewImage={previewImage}
          onChange={handleChange as any}
          onDrop={handleOnDrop as any}
          multiple={true}
          setPreviewImage={setPreviewImage}
        />
      </div>
    );
  },
};
