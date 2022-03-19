import Index from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Index />
      {children}
    </>
  );
};

export default Layout;
