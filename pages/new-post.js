import Layout from "../components/Layout";

import ImageUploaderWithPreview from "../components/ImageUploaderWithPreview";
import { useState } from "react";
import { Select } from "antd";
import Tags from "../constants/tags.json";

const NewPost = () => {
  const [tagOptions, setTagOptions] = useState([]);
  const [imageFile, setImageFile] = useState("");

  const { Option } = Select;

  const handleTagsChange = (value) => {
    setTagOptions(value);
  };

  console.log(tagOptions);

  return (
    <Layout>
      <div className="new-post">
        <div className="new-post__wrapper">
          <h1 className="new-post__title">Create New Post</h1>
          <form className="new-post__wrapper__form">
            <label className="new-post__wrapper__form__item">
              <span>Image</span>
              <ImageUploaderWithPreview setImageFile={setImageFile} />
            </label>
            <label className="new-post__wrapper__form__item">
              <span>Title</span>
              <input type="text" placeholder="Post Title" />
            </label>
            <label className="new-post__wrapper__form__item">
              <span>Description</span>
              <textarea placeholder="Post Description" rows={4} />
            </label>
            <label className="new-post__wrapper__form__item">
              <span>Tags</span>
              <Select
                onChange={handleTagsChange}
                mode="tags"
                placeholder="Select Tags"
              >
                {Tags.map((item) => (
                  <Option value={item.name} key={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </label>
            <button className="new-post__wrapper__form__button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewPost;
