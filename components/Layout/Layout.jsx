import React from "react";
import Navbar from "./Navbar";

import classes from "./Layout.module.css";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
