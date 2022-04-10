import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { _getUser } from "../store/actions/user";
import Header from "./header";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_getUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
