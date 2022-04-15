import Image from "next/image";

import MoreIcon from "../../icons/more-icon";
import XImage from "../../assets/ximage.jpeg";
import moment from "moment";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Button, Popover } from "antd";

const MainPostCard = ({ post }) => {
  const { user } = useSelector((state) => state.user);

  const edit = () => console.log("clicked");

  const deletePost = () => console.log("clicked");

  const Content = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column",width:"6rem" }}>
        <Button
          style={{
            marginBottom: ".25rem",
            backgroundColor: "rgb(53, 108, 180)",
          }}
          type="primary"
          onClick={edit}
        >
          Edit
        </Button>
        <Button
          type="danger"
          style={{
            marginBottom: ".25rem",
            backgroundColor:"#E74421"
          }}
          onClick={deletePost}
        >
          Delete
        </Button>
      </div>
    );
  };

  return (
    <div className="main-post-card">
      <div className="main-post-card__info">
        <div className="main-post-card-left">
          <div className="main-post-card__info__left__header">
            <span className="main-post-card__info__left__header__post-owner">
              <span className="main-post-card__info__left__header__post-owner__image">
                😀
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
              <Link href={`/blogs/${post._id}`}>
                <a>{post.title}</a>
              </Link>
            </div>
            <div className="main-post-card__info__left__main__desc">
              <Link href={`/blogs/${post._id}`}>
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
            <Popover placement="bottom" content={<Content />}>
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
