import Image from "next/image";

import MoreIcon from "../icons/more-icon";
import XImage from "../assets/ximage.jpeg"


const MainPostCard = () => {
  return (
    <div className="main-post-card">
      <div className="main-post-card__info">
        <div className="main-post-card__info__header">
          <span className="main-post-card__info__header__post-owner">
              <span className="main-post-card__info__header__post-owner__image">😀</span>
              <span className="main-post-card__info__header__post-owner__name">Mevlüt Can Tuna</span>
          </span>
          <span className="main-post-card__info__header__divider">·</span>
          <span className="main-post-card__info__header__date">Oct 21, 2022</span>
        </div>
        <div className="main-post-card__info__main">
          <div className="main-post-card__info__main__title">
            Finally a better react.js folder structure
          </div>
          <div className="main-post-card__info__main__desc">
            You might thinked “Why react.js don’t have standard folder
            structure?”. To find answer, you need to understand the difference
            between framework library. Please refer the below image:-
          </div>
        </div>
        <div className="main-post-card__info__footer">
          <div className="main-post-card__info__footer__left">
            <div className="main-post-card__info__footer__tags">
              React , Vue , OOP
            </div>
            <div className="main-post-card__info__footer__reading-time">
              4 min read
            </div>
          </div>
          <div className="main-post-card__info__footer__right">
                <MoreIcon/>
          </div>
        </div>
      </div>
      <div className="main-post-card__image">
          <div className="main-post-card__image__container">
              <Image src={XImage} width={300} height={300} alt="post-image"/>
          </div>
      </div>
    </div>
  );
};

export default MainPostCard;
