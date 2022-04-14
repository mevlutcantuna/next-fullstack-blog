import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { _getUser } from "../store/actions/user";
import Header from "./header";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
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
