import { useState } from "react";
import Link from "next/link";

import DrawerMenu from "./DrawerMenu";
import Menu from "./Menu";

import HamburgerMenu from "../../icons/hamburger-menu";

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
