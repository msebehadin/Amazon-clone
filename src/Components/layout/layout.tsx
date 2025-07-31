import React from "react";
import Header from "../Header/header";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      {children}
    </>
  );
};

export default Layout;

