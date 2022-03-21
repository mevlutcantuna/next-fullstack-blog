import { Upload, Button, message } from "antd";
import ImgCrop from "antd-img-crop";
import Image from "next/image";

import ProfileImage from "../assets/ximage.jpeg";

const Profile = () => {
  const props = {
    beforeUpload: (file) => {
      const isPNG =
        file.type === "image/png" ||
        file.type === "image/jpg" ||
        file.type === "image/jpeg";
      if (!isPNG) {
        message.error(`${file.name} is not a png or jpg or jpeg file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };

  return (
    <div className="profile">
      <div className="profile__image">
        <Upload {...props} multiple={false}>
          <div className="profile__image__uploader">
            <Image
              width={200}
              height={200}
              objectFit="contain"
              alt="profile-image"
              src={ProfileImage}
            />
            <div className="profile__image__uploader__text">Upload</div>
          </div>
        </Upload>
      </div>

      <div className="profile__info">
        <div className="profile__info__name"></div>
        <div className="profile__info__desc"></div>
      </div>
    </div>
  );
};

export default Profile;
