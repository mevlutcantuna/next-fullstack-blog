import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const SmallCard = ({ post }) => {
  return (
    <div className="small-post-card">
      <Link href={`/posts/${post?._id}`}>
        <a>
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
            <h3>{post?.title}</h3>
            <p>{moment(post?.updatedAt).format("MMM Do YY")}</p>
          </div>
          <div className="small-post-card__text">{post?.shortDescription}</div>
          <div className="small-post-card__footer">More Detail</div>
        </a>
      </Link>
    </div>
  );
};

export default SmallCard;
