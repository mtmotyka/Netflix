import React from "react";

import "./layout.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
