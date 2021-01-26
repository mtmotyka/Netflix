import React from "react";

import "./layout.scss";

import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Header />
      <div className="main-content">{children}</div>
    </main>
  );
};

export default Layout;
