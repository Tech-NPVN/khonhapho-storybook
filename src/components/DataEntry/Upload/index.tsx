import { AddIcon, Typography } from '@/components/General';

type UploadType = React.InputHTMLAttributes<InputEvent> & {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  previewImage: string[];
  onRemove?: React.MouseEventHandler<HTMLButtonElement>;
  setPreviewImage: React.Dispatch<React.SetStateAction<string[]>>;
  onDrop?: (event: React.DragEvent) => void;
};

export const Upload = ({ onChange, multiple = false, onDrop, className }: UploadType) => {
  const handleOnDrag = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className={`cursor-pointer flex items-center justify-center border border-dashed w-[200px] h-[200px] rounded-lg relative overflow-hidden group ${className}`}
    >
      <label
        htmlFor="avatar"
        className="absolute inset-0 cursor-pointer"
        onDragOver={handleOnDrag}
        onDragLeave={handleOnDrag}
        onDrop={onDrop}
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
  );
};
