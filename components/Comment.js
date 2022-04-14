import Image from "next/image";
import MoreIcon from "../icons/more-icon";
import { Popover, Button } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";

const Comment = ({ comment,_deleteComment }) => {
  const { user } = useSelector((state) => state.user);

  const content = (
    <div>
      <Button onClick={() => _deleteComment(comment._id)} type="danger">Delete</Button>
    </div>
  );

  console.log(comment)

  return (
    <div className="comment">
      <div className="comment__header">
        <div className="comment__header__author">
          <div className="comment__header__author__image">
            <Image
              src={comment.author.image}
              width={30}
              height={30}
              alt="author-image"
            />
          </div>
          <span className="comment__header__author__name">
            {comment.author.fullname}
          </span>
          <span className="comment__header__author__date">
              {moment(comment.createdAt).format('MMM Do YYYY')}
          </span>
        </div>
        <div>
          {user._id === comment.author._id && (
            <Popover placement="bottom" trigger="click" content={content}>
              <Button type="text">
                <MoreIcon />
              </Button>
            </Popover>
          )}
        </div>
      </div>

      <p className="comment__text">{comment.text}</p>
    </div>
  );
};

export default Comment;
