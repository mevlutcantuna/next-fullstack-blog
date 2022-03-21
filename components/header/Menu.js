import Link from "next/link";
import Image from "next/image";

import ExpandIcon from "../../icons/expand-icon";
import { Popover } from "antd";
import PopoverContent from "./PopoverContent";
import Logout from "../../icons/logout";

const Menu = () => {
  return (
    <div className="header-menu">
      <ul className="header-menu__links">
        <li className="header-menu__links__item">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="header-menu__links__item">
          <Link href="/">
            <a>Technology</a>
          </Link>
        </li>
        <li className="header-menu__links__item">
          <Link href="/marketing">
            <a>Marketing</a>
          </Link>
        </li>
        <li className="header-menu__links__item">
          <Link href="/account">
            <a>
              <div className="header-menu__links__item--account">
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
          <div className="popover">
            <Popover
              placement="bottom"
              content={PopoverContent}
              trigger="click"
            >
              <button>
                <ExpandIcon />
              </button>
            </Popover>
          </div>
          <div className="logout">
              <Logout/>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
