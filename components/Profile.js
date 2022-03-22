import { Upload, message } from "antd";
import Image from "next/image";
import { useState } from "react";

import {Form,Input,Button} from "antd"

import ProfileImage from "../assets/ximage.jpeg";

const Profile = () => {
    const [imageFile,setImageFile] = useState();

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
      setImageFile(info.fileList);
    },
  };

  console.log(imageFile)

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
      <Form
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item 
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input
                placeholder="Full Name"
                type="text"
                name="fullname"
              />
            </Form.Item>

            <Form.Item
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                placeholder="Email"
                type="email"
                name="email"
              />
            </Form.Item>

            <Form.Item
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                name="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item  style={{ textAlign: 'right' }}>
              <Button type="#000000" htmlType="submit" style={{borderRadius:"4px",width:"8rem",height:"2.5rem"}}>
                Update
              </Button>
            </Form.Item>
          </Form>
      </div>
    </div>
  );
};

export default Profile;
