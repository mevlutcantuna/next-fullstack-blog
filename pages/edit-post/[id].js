import Layout from "../../components/Layout";
import { Spin, Select, message } from "antd";
import ImageUploaderWithPreview from "../../components/ImageUploaderWithPreview";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Tags from "../../constants/tags.json";
import { getPostDetail } from "../../api/post";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");

  const [tagOptions, setTagOptions] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const { user } = useSelector((state) => state.user);
  const router = useRouter();
  const { id } = router.query;

  const { Option } = Select;

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleShortDescriptionChange = (e) => {
    setShortDescription(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTagsChange = (value) => {
    setTagOptions(value);
  };

  const _getPost = async () => {
    let form = {
      post_id: id,
      user_id: user._id,
    };

    setLoading(true);

    try {
      const { data } = await getPostDetail(form);
      setPost(data.post);
      setTitle(data.post.title);
      setShortDescription(data.post.shortDescription);
      setDescription(data.post.description);
      setTagOptions(data.post.tags);
      setImageUrl(data.post.imageUrl);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return message.error(error.message);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (user && id) {
      _getPost();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, id]);

  if (loading) {
    return (
      <Layout>
        <div style={{ width: "100%", marginTop: "2rem", textAlign: "center" }}>
          <Spin />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="new-post">
        <div className="new-post__wrapper">
          <h1 className="new-post__title">Edit Your Post</h1>
          <form onSubmit={submit} className="new-post__wrapper__form">
            <label className="new-post__wrapper__form__item">
              <span>Image</span>
              <ImageUploaderWithPreview
                previewImage={imageUrl}
                setImage={setImageUrl}
              />
            </label>
            <label className="new-post__wrapper__form__item">
              <span>Title</span>
              <input
                value={title}
                onChange={handleTitleChange}
                type="text"
                placeholder="Post Title"
              />
            </label>
            <label className="new-post__wrapper__form__item">
              <span>Short Description</span>
              <input
                name="shortDescription"
                value={shortDescription}
                onChange={handleShortDescriptionChange}
                type="text"
                placeholder="Short Description"
              />
            </label>
            <label className="new-post__wrapper__form__item">
              <span>Description</span>
              <textarea
                name="description"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Post Description"
                rows={4}
              />
            </label>
            <label className="new-post__wrapper__form__item">
              <span>Tags</span>
              <Select
                value={tagOptions}
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
    </Layout>
  );
};

export default EditPost;
