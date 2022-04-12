import { useState } from "react";
import { useSelector } from "react-redux";
import { useInput } from "../hooks/useInput";

import Layout from "../components/Layout";
import ImageUploaderWithPreview from "../components/ImageUploaderWithPreview";

import { Spin, message, Select } from "antd";

import Tags from "../constants/tags.json";
import { uploadImage } from "../utils/uploadImage";
import { createPost } from "../api/blog";
import readingTime from "reading-time";
import moment from "moment";
import { Router, useRouter } from "next/router";

const NewPost = () => {
  const [inputs, setInputs] = useInput({
    title: "",
    shortDescription: "",
    description: "",
  });
  const [tagOptions, setTagOptions] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  const { Option } = Select;

  const handleTagsChange = (value) => {
    setTagOptions(value);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (
      imageUrl === "" ||
      inputs.title === "" ||
      inputs.description === "" ||
      inputs.shortDescription === "" ||
      tagOptions.length <= 0
    ) {
      return message.error("Please fill out the form.");
    }

    setLoading(true);

    const newPost = {
      title: inputs.title,
      shortDescription: inputs.shortDescription,
      description: inputs.description,
      imageUrl,
      tags: tagOptions,
      user_id: user._id,
      createdAt: new Date(),
      updatedAt: new Date(),
      readingTime: readingTime(inputs.description),
    };

    try {
      const _post = await createPost(newPost);
      setPost(_post.data.post);
      setLoading(false);
      router.push(`/blogs/${_post.data.post._id}`);
    } catch (error) {
      setLoading(false);
      return message.error(error.message);
    }
  };

  return (
    <Layout>
      <Spin spinning={loading}>
        <div className="new-post">
          <div className="new-post__wrapper">
            <h1 className="new-post__title">Create New Post</h1>
            <form onSubmit={submit} className="new-post__wrapper__form">
              <label className="new-post__wrapper__form__item">
                <span>Image</span>
                <ImageUploaderWithPreview setImage={setImageUrl} />
              </label>
              <label className="new-post__wrapper__form__item">
                <span>Title</span>
                <input
                  name="title"
                  value={inputs.name}
                  onChange={setInputs}
                  type="text"
                  placeholder="Post Title"
                />
              </label>
              <label className="new-post__wrapper__form__item">
                <span>Short Description</span>
                <input
                  name="shortDescription"
                  value={inputs.shortDescription}
                  onChange={setInputs}
                  type="text"
                  placeholder="Short Description"
                />
              </label>
              <label className="new-post__wrapper__form__item">
                <span>Description</span>
                <textarea
                  name="description"
                  value={inputs.description}
                  onChange={setInputs}
                  placeholder="Post Description"
                  rows={4}
                />
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
              <button
                onClick={submit}
                className="new-post__wrapper__form__button"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Spin>
    </Layout>
  );
};

export default NewPost;
