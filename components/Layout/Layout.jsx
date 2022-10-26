import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import classes from "./Layout.module.css";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Kevin Bryan - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className={classes.container}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
