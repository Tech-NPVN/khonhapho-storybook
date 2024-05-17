import { Avatar } from '@/components/DataDisplay';
import { Input, Upload } from '@/components/DataEntry';
import { Textarea } from '@/components/DataEntry/Textarea';
import { Modal } from '@/components/Feedback';
import { Button, DeleteIcon, Typography } from '@/components/General';
import { useState } from 'react';

const CreatePost = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string[]>([]);
  const handleUploadImage = (e: any) => {
    console.log(e.target.files[0]);
    setPreviewImage([...previewImage, URL.createObjectURL(e.target.files[0])]);
  };

  const handleDeleteImage = (index: number) => {
    setPreviewImage(previewImage.filter((image, i) => i !== index));
  };

  return (
    <div className=" bg-[#FFFFFF] dark:bg-primaryColorDark -mx-3 md:mx-0 dark:text-textPrimaryDark rounded-md px-6 py-3">
      <div className="flex flex-col gap-1 pt-3">
        <Typography variant="h2">Tạo bài viết</Typography>
        <Typography variant="p">(Cần xét duyệt)</Typography>
      </div>
      <div className="flex mt-4 gap-2 pb-3">
        <Avatar
          height={40}
          width={40}
          alt="avatar"
          src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
        ></Avatar>
        <Input
          placeholder="Bắt đầu một bài viết"
          className="bg-secondaryColorLight dark:bg-secondaryColorDark"
          onClick={() => setIsOpenModal(true)}
        />
      </div>
      <Modal
        open={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        isDivided={false}
        title="Tạo bài viết"
        className="w-[90%] md:w-1/2"
        styleTitle="flex justify-center w-full"
      >
        <div className="flex gap-2 items-center">
          <Avatar
            height={40}
            width={40}
            alt="avatar"
            src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
          ></Avatar>
          <div className="flex flex-col gap-1">
            <Typography variant="h2" className="text-base">
              Nhà Phố Việt Nam
            </Typography>
            <Typography variant="p" className="text-[14px]">
              Tin thông báo vụ chốt
            </Typography>
          </div>
        </div>

        <Textarea
          placeholder="Tiêu đề bài viết*..."
          className="px-[13px] py-[14px] h-[70px] mt-6 bg-secondaryColorLightD2 dark:bg-secondaryColorDark"
        ></Textarea>
        <Textarea
          placeholder="Nội dung bài viết*..."
          className="px-[12px]  pt-[13px] h-[343px] mt-6 bg-secondaryColorLightD2 dark:bg-secondaryColorDark"
        ></Textarea>
        <div className="mt-6 flex gap-6 flex-col md:flex-row">
          <span className="text-textPrimaryLight dark:text-textPrimaryDark">Ảnh</span>
          <Upload
            previewImage={previewImage}
            setPreviewImage={setPreviewImage}
            onChange={handleUploadImage}
            className="!w-[100px] !h-[100px]"
          />

          <div className="flex flex-wrap gap-4">
            {previewImage &&
              previewImage.map((image, index) => {
                return (
                  <div
                    className="cursor-pointer  border w-[100px] h-[100px] rounded-lg relative overflow-hidden group p-2"
                    key={image}
                  >
                    <img src={image} alt="" className="w-full h-full" />
                    <div className="absolute inset-0">
                      <button
                        type="button"
                        className="absolute flex items-center justify-center invisible w-10 h-10 text-center text-red-600 transition-all -translate-x-1/2 -translate-y-1/2 bg-white rounded-full opacity-0 cursor-pointer top-1/2 left-1/2 z-100 group-hover:opacity-100 group-hover:visible"
                        onClick={() => handleDeleteImage(index)}
                      >
                        <DeleteIcon color="" className="fill-errorLight" />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex justify-end md:pb-[70px]">
          <Button className="mt-9 w-[68px] h-[37px] px-9 py-17 rounded-[30px]">Đăng</Button>
        </div>
      </Modal>
    </div>
  );
};

export default CreatePost;
