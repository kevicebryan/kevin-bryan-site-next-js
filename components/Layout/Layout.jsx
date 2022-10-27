import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import classes from "./Layout.module.css";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Kevin Bryan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
