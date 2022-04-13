import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { getPostDetail, updatePostLikeCount } from "../../api/blog";
import moment from "moment";
import { Spin } from "antd";
import HeartEmpty from "../../icons/heart-empty";
import HeartFill from "../../icons/heart-fill";
import PostTag from "../../components/PostTag";
import { useInput } from "../../hooks/useInput";

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useInput({ commentValue: "" });
  const router = useRouter();
  const { id } = router.query;

  const _getPostDetail = async () => {
    setLoading(true);
    const form = {
      user_id: user?._id,
      post_id: id,
    };
    const { data } = await getPostDetail(form);
    setLoading(false);
    setPost(data.post);
  };

  const updatePostLike = async (value) => {
    const updatedPostLike = await updatePostLikeCount({
      user_id: user._id,
      post_id: id,
      likeValue: value,
    });

    const updatedPost = {
      ...post,
      likes: updatedPostLike.data.post.likes,
      isLiked: updatedPostLike.data.post.isLiked,
    };

    setPost(updatedPost);
  };

  useEffect(() => {
    if (user && id) {
      _getPostDetail();
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
      <div className="post-detail">
        {post && (
          <div className="post-detail__wrapper">
            <div className="post-detail__wrapper__image">
              <Image
                src={post.imageUrl}
                width={1000}
                height={380}
                alt="detail-image"
              />
            </div>

            <h1 className="post-detail__wrapper__title">{post.title}</h1>
            <p className="post-detail__wrapper__short-description">
              {post.shortDescription}
            </p>
            <div className="post-detail__wrapper__bar">
              <div className="post-detail__wrapper__bar__left">
                <span>{moment(post.updatedAt).format("MMM Do YYYY")}</span>
                <span>{post.readingTime.text}</span>
              </div>
              <div className="post-detail__wrapper__bar__right">
                {!post.isLiked ? (
                  <button onClick={() => updatePostLike(1)}>
                    <HeartEmpty />
                  </button>
                ) : (
                  <button onClick={() => updatePostLike(-1)}>
                    <HeartFill />
                  </button>
                )}

                <span>{post.likes} Likes</span>
              </div>
            </div>
            <div className="post-detail__wrapper__tags">
              {post.tags.map((tag) => (
                <PostTag key={tag} tag={tag} />
              ))}
            </div>
            <div className="post-detail__wrapper__author">
              <Image
                className="post-detail__wrapper__author__image"
                src={post.author.image}
                width={40}
                height={40}
                alt="author-image"
              />
              <span className="post-detail__wrapper__author__name">
                {post.author.fullname}
              </span>
            </div>
            <div className="post-detail__wrapper__description">
              {post.description}
            </div>
            <div className="post-detail__wrapper__comment-title">Comments</div>
            <div className={"post-detail__wrapper__comment-bar"}>
              <Image
                className="post-detail__wrapper__comment-bar__image"
                src={user && user.image}
                width={40}
                height={40}
                alt="author-image"
              />
              <input
                className="post-detail__wrapper__comment-bar__input"
                value={inputs.commentValue}
                onChange={setInputs}
                name="commentValue"
                placeholder="Write a comment..."
              />
              <button
                disabled={inputs.commentValue === ""}
                className="post-detail__wrapper__comment-bar__button"
              >
                Comment
              </button>
            </div>
            <div className="post-detail__wrapper__comments">sa</div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PostDetail;
