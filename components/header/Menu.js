import Link from "next/link";
import Image from "next/image";

import ExpandIcon from "../../icons/expand-icon";
import { Popover } from "antd";
import PopoverContent from "./PopoverContent";
import Logout from "../../icons/logout";
import { useDispatch, useSelector } from "react-redux";
import { _resetUser } from "../../store/actions/user";
import { useRouter } from "next/router";

const Menu = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.user);

  const logout = () => {
    dispatch(_resetUser());
    localStorage.removeItem("token");
    return router.push("/login");
  };

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
          <Link href={user ? "/new-post" : "/login"}>
            <a>Create New Post</a>
          </Link>
        </li>
        <li className="header-menu__links__item">
          {user ? (
            <>
              <Link href="/account">
                <a>
                  <div className="header-menu__links__item--account">
                    <Image
                      width={40}
                      height={40}
                      alt="profil-image"
                      src={user?.image}
                    />
                    <span>{user?.fullname}</span>
                  </div>
                </a>
              </Link>
              <div className="popover">
                <Popover
                  placement="bottom"
                  content={<PopoverContent logout={logout} />}
                  trigger="click"
                >
                  <button>
                    <ExpandIcon />
                  </button>
                </Popover>
              </div>
              <div className="logout">
                <button onClick={() => logout()}>
                  <Logout />
                </button>
              </div>
            </>
          ) : (
            <div>
              <Link href="/login">
                <a>Log in</a>
              </Link>
              <divider style={{marginRight:"1.25rem"}}>|</divider>
              <Link href="/signup">
                <a>Sign up</a>
              </Link>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Menu;
