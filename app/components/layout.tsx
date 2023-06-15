import React, { ReactNode } from "react";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
