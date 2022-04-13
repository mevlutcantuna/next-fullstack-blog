import Image from "next/image";
import Link from "next/link";

import moment from "moment";

const SmallCard = ({ post }) => {
  return (
    <div className="small-post-card">
      <div className="small-post-card__image">
        <Image
          src={post?.imageUrl}
          alt="card-image"
          width={310}
          height={150}
          objectFit="cover"
        />
      </div>
      <div className="small-post-card__header">
        <Link href={`/blogs/${post?._id}`}>
          <a>
            <h3>{post?.title}</h3>
          </a>
        </Link>
        <p>{moment(post?.updatedAt).format("MMM Do YY")}</p>
      </div>
      <div className="small-post-card__text">{post?.shortDescription}</div>
      <div className="small-post-card__footer">
        <Link href={`/blogs/${post?._id}`}>
          <a>More Detail</a>
        </Link>
      </div>
    </div>
  );
};

export default SmallCard;
