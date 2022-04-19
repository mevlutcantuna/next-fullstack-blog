import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getUser } from "../store/actions/user";
import Header from "./header";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token && !user) {
      dispatch(_getUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
