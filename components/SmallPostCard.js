import Image from "next/image";

import XImage from "../assets/ximage.jpeg";

const SmallCard = () => {
  return ( 
    <div className="small-post-card">
      <div className="small-post-card__image">
        <Image src={XImage} alt="card-image" width={310} height={150} objectFit="cover"/>
      </div>
      <div className="small-post-card__header">
        <h3>Best Github Repos</h3>
        <p>21.02.2021</p>
      </div>
      <div className="small-post-card__text">
        500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
      </div>
      <div className="small-post-card__footer">More Detail</div>
    </div>
  );
};

export default SmallCard;
