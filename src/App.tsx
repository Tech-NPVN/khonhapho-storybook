import { useState } from 'react';
import { InputFormPassword } from './components/DataEntry';
import { Upload } from './components/DataEntry/Upload';

const App = () => {
  const [previewImage, setPreviewImage] = useState('');
  const [urlImage, setUrlImage] = useState('');
  console.log('🚀 ~ App ~ urlImage:', urlImage);

  const handleChange = async (e: any) => {
    const file = e.target.files[0];
    e.target.value = null;
    setPreviewImage(URL.createObjectURL(file));
    setUrlImage(file);
  };

  const handleDeleteImage = async () => {
    setPreviewImage('');
    setUrlImage('');
  };

  return (
    <>
      <Upload
        previewImage={previewImage}
        onChange={handleChange}
        onClick={handleDeleteImage}
        multiple={true}
        setPreviewImage={setPreviewImage}
        setUrlImage={setUrlImage}
      />
    </>
  );
};

export const Password = () => {
  return <InputFormPassword name="password" label="Password" />;
};

export default App;
