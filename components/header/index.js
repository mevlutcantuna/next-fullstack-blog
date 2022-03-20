import Link from "next/link";
import ExpandIcon from "../../icons/expand-icon";
import HamburgerMenu from "../../icons/hamburger-menu";
import Image from "next/image";

import { Popover } from "antd";
import PopoverContent from "./PopoverContent";
import { useState } from "react";
import DrawerMenu from "./DrawerMenu";
import Menu from "./Menu";

const Index = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const changeDrawerIsOpen = (value) => {
    setDrawerIsOpen(value);
  };

  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__container__title">
          <Link href="/">
            <a>postBlog</a>
          </Link>
        </h1>
        <div className="header__container__hamburger-menu">
          <div onClick={() => changeDrawerIsOpen(true)}>
            <HamburgerMenu />
          </div>
          <DrawerMenu
            onClose={() => changeDrawerIsOpen(false)}
            visible={drawerIsOpen}
          />
        </div>
        <div className="header__container__menu">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Index;
