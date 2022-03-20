import Link from "next/link";
import ExpandIcon from "../../icons/expand-icon";
import Image from "next/image";

import { Popover } from "antd";
import PopoverContent from "./PopoverContent";

const Index = () => {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__container__title">postsBlog</h1>
        <ul className="header__container__links">
          <li className="header__container__links__item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="header__container__links__item">
            <Link href="/">
              <a>Technology</a>
            </Link>
          </li>
          <li className="header__container__links__item">
            <Link href="/marketing">
              <a>Marketing</a>
            </Link>
          </li>
          <li className="header__container__links__item">
            <Link href="/">
              <a>
                <div className="header__container__links__item--account">
                  <Image
                    width={40}
                    height={40}
                    alt="profil-image"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  />
                  <span>Mevlüt Can Tuna</span>
                </div>
              </a>
            </Link>
            <Popover
              placement="bottom"
              content={PopoverContent}
              trigger="click"
            >
              <button>
                <ExpandIcon />
              </button>
            </Popover>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
