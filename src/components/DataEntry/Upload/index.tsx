import { AddIcon, DeleteIcon, Typography } from '@/components/General';

type UploadType = React.InputHTMLAttributes<InputEvent> & {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  previewImage: string;
  onClick?: (event: any) => void;
  setPreviewImage: React.Dispatch<React.SetStateAction<string>>;
  setUrlImage: any;
};

export const Upload = ({
  onChange,
  previewImage,
  setPreviewImage,
  setUrlImage,
  multiple = false,
  onClick,
}: UploadType) => {
  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleOnDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleOnDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setPreviewImage(URL.createObjectURL(file));
    setUrlImage(file);
  };

  return (
    <div className="flex gap-2">
      {previewImage && (
        <div className="cursor-pointer flex items-center justify-center border w-[200px] h-[200px] rounded-lg relative overflow-hidden group p-2">
          <img src={previewImage} alt="" />
          <div className="absolute inset-0">
            <button
              type="button"
              className="absolute flex items-center justify-center invisible w-10 h-10 text-center text-red-600 transition-all -translate-x-1/2 -translate-y-1/2 bg-white rounded-full opacity-0 cursor-pointer top-1/2 left-1/2 z-100 group-hover:opacity-100 group-hover:visible"
              onClick={onClick}
            >
              <DeleteIcon color="" className="fill-errorLight" />
            </button>
          </div>
        </div>
      )}
      <div className="cursor-pointer flex items-center justify-center border border-dashed w-[200px] h-[200px] rounded-lg relative overflow-hidden group">
        <label
          htmlFor="avatar"
          className="absolute inset-0 cursor-pointer"
          onDragOver={handleOnDragOver}
          onDragLeave={handleOnDragLeave}
          onDrop={handleOnDrop}
        >
          <input
            type="file"
            name="avatar"
            id="avatar"
            multiple={multiple}
            placeholder="Enter your avatar"
            onChange={onChange}
            className="hidden"
          />
        </label>
        <div className="flex flex-col items-center gap-4">
          <AddIcon height="20" width="20" />
          <Typography variant="span">Upload</Typography>
        </div>
      </div>
    </div>
    // th : update - có image
  );
};
