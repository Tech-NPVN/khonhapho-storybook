import { useState } from 'react';
import { z } from 'zod';
import { InputFormPassword } from './components/DataEntry';
import { Upload } from './components/DataEntry/Upload';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

const App = () => {
  const [previewImage, setPreviewImage] = useState('');
  const [urlImage, setUrlImage] = useState('');
  console.log('🚀 ~ App ~ urlImage:', urlImage);

  const handleChange = async (e: any) => {
    const file = e.target.files[0];
    e.target.value = null;
    setPreviewImage(URL.createObjectURL(file));

    setUrlImage('');
  };

  const handleDeleteImage = async () => {
    setPreviewImage('');
  };

  return (
    <>
      <Upload previewImage={previewImage} onChange={handleChange} onClick={handleDeleteImage} />
    </>

  );
};

export const Password = () => {
  return <InputFormPassword name="password" label="Password" />;
};

export default App;
