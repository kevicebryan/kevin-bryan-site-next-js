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
        <meta
          name="description"
          content="Welcome to my portfolio website. Kevin is a web developer specializing in React and Next.js."
        />
        <meta
          name="keywords"
          content="kevin bryan, ada studio, kevicebryan, web developer, react, next.js, portfolio"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Kevin Bryan" />
        <meta
          property="og:description"
          content="Welcome to my portfolio website. Kevin is a web developer specializing in React and Next.js."
        />
        <meta property="og:image" content="/snapshot.png" />
        <meta property="og:url" content="https://www.kevbry.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kevin Bryan" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
