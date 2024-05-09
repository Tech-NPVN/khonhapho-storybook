import React, { ChangeEvent, useState } from 'react';

interface ImageUploadProps {
  multiple: boolean;
  onChange?: (fileList: File[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ multiple, onChange }) => {
  const [fileList, setFileList] = useState<File[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const files: FileList = event.target.files;
    const newFileList: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newFileList.push(file);
    }
    setFileList(newFileList);
    onChange && onChange(newFileList);
  };

  const handleRemove = (fileToRemove: File) => {
    const newFileList = fileList.filter((file) => file !== fileToRemove);
    setFileList(newFileList);
    onChange && onChange(newFileList);
  };

  return (
    <div>
      <input type="file" multiple={multiple} onChange={handleChange} />
      {fileList.map((file) => (
        <div key={file.name}>
          <img
            src={URL.createObjectURL(file)}
            alt={file.name}
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
          <button onClick={() => handleRemove(file)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ImageUpload;
