import { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Comment, Layout, PostTag, EditPopover } from "../../components";
import {
  getPostDetail,
  updatePostLikeCount,
  getComments,
  addComment,
  deleteComment,
} from "../../api/post";
import moment from "moment";
import { Button, Popover, Spin } from "antd";
import HeartEmpty from "../../icons/heart-empty";
import HeartFill from "../../icons/heart-fill";
import MoreIcon from "../../icons/more-icon";
import { deletePost } from "../../store/actions/post";
import Link from "next/link";

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useInput({ commentValue: "" });
  const [comments, setComments] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const _getPostDetail = async () => {
    setLoading(true);
    const form = {
      post_id: id,
      user_id: user && user._id,
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

  const _getComments = async () => {
    const { data } = await getComments({ post_id: id });
    setComments(data.comments);
  };

  const _addComment = async () => {
    const { data } = await addComment({
      text: inputs.commentValue,
      post_id: id,
      user_id: user._id,
    });

    setComments((prev) => [data.comment, ...prev]);
  };

  const _deleteComment = async (comment_id) => {
    const { data } = await deleteComment({ comment_id });
    const deletedComments = comments.filter(
      (item) => item._id !== data.comment._id
    );
    setComments(deletedComments);
  };

  const _deletePost = () => {
    dispatch(deletePost(post._id));
    router.push("/posts");
  };

  const editPost = () => {
    return router.push(`/edit-post/${post._id}`);
  };

  useEffect(() => {
    if (user && id) {
      _getComments();
    }

    if (id) {
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
              {user && (
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
                  <span>
                    {user._id === post.author._id && (
                      <Popover
                        content={
                          <EditPopover
                            deletePost={_deletePost}
                            editPost={editPost}
                          />
                        }
                        placement="bottom"
                      >
                        <Button type="text" style={{ transform: "scale(1)" }}>
                          <MoreIcon />
                        </Button>
                      </Popover>
                    )}
                  </span>
                </div>
              )}
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
            {!user ? (
              <div style={{ fontSize: "1.75rem" }}>
                You must&nbsp;
                <Link href="/login">
                  <a>sign in!</a>
                </Link>
              </div>
            ) : (
              <>
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
                    onClick={_addComment}
                  >
                    Comment
                  </button>
                </div>
                <div className="post-detail__wrapper__comments">
                  {comments ? (
                    comments.map((comment) => (
                      <Comment
                        _deleteComment={_deleteComment}
                        key={comment._id}
                        comment={comment}
                      />
                    ))
                  ) : (
                    <h1>Add First Comment</h1>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PostDetail;
