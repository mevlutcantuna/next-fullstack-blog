import Image from "next/image";

import MoreIcon from "../../icons/more-icon";
import moment from "moment";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Button, Popover } from "antd";
import Edit from "../EditPopover";

import { useRouter } from "next/router";

const MainPostCard = ({ post, deletePost }) => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  const _editPost = () => {
    return router.push(`/edit-post/${post._id}`);
  };

  return (
    <div className="main-post-card">
      <div className="main-post-card__info">
        <div className="main-post-card-left">
          <div className="main-post-card__info__left__header">
            <span className="main-post-card__info__left__header__post-owner">
              <span className="main-post-card__info__left__header__post-owner__image">
                <Image
                  src={post.author.image}
                  width={20}
                  height={20}
                  alt="author-image"
                />
              </span>
              <span className="main-post-card__info__left__header__post-owner__name">
                {post.author.fullname}
              </span>
            </span>
            <span className="main-post-card__info__left__header__divider">
              ·
            </span>
            <span className="main-post-card__info__left__header__date">
              {moment(post.createdAt).format("MMM Do YYYY")}
            </span>
          </div>
          <div className="main-post-card__info__left__main">
            <div className="main-post-card__info__left__main__title">
              <Link href={`/posts/${post._id}`}>
                <a>{post.title}</a>
              </Link>
            </div>
            <div className="main-post-card__info__left__main__desc">
              <Link href={`/posts/${post._id}`}>
                <a>{post.shortDescription}</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="main-post-card__info__image">
          <div className="main-post-card__info__image__container">
            <Image
              src={post.imageUrl}
              width={300}
              height={300}
              alt="post-image"
            />
          </div>
        </div>
      </div>

      <div className="main-post-card__footer">
        <div className="main-post-card__footer__left">
          <div className="main-post-card__footer__left__tags">
            {post.tags.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="main-post-card__footer__left__reading-time">
            {post.readingTime.text}
          </div>
        </div>
        <div className="main-post-card__footer__right">
          {user?._id === post.author._id && (
            <Popover
              placement="bottom"
              content={
                <Edit
                  editPost={_editPost}
                  deletePost={() => deletePost(post._id)}
                />
              }
            >
              <Button type="text">
                <MoreIcon />
              </Button>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPostCard;
