import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import classes from "./Layout.module.css";
import Footer from "./Footer";
import Image from "next/image";

const Layout = (props) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const topGradient = document.querySelector(`.${classes.gradient_top}`);
      const bottomGradient = document.querySelector(`.${classes.gradient_btm}`);
      if (topGradient && bottomGradient) {
        topGradient.style.transform = `translateY(${scrollY * 0.25}px)`;
        bottomGradient.style.transform = `translateY(${scrollY * -0.25}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener on unmount
    };
  }, []); // Empty dependency array to run once on mount

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
      <Image
        src="/static/assets/gradient.svg"
        alt="gradient"
        width={760}
        height={820}
        className={classes.gradient_top}
      />
      <Image
        src="/static/assets/gradient.svg"
        alt="gradient"
        width={760}
        height={820}
        className={classes.gradient_btm}
      />

      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
