import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import classes from "./Layout.module.css";
import Footer from "./Footer";
import Image from "next/image";

const Layout = (props) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const gradTop = document.querySelector(`.${classes.gradTop}`);
      const gradBtm = document.querySelector(`.${classes.gradBtm}`);

      gradTop.style.transform = `translateY(${
        scrollPosition * 0.2
      }px) scale(1.8)`;
      gradBtm.style.transform = `translateY(${
        scrollPosition * 0.1
      }px) scale(1.8) rotate(-150deg)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <title>Kevin Bryan</title>
        <meta
          name="description"
          content="Welcome to my portfolio website. Kevin Bryan is a web app developer specializing in building modern and scalable applications."
        />
        <meta
          name="keywords"
          content="kevin bryan, web developer, web app development, full-stack developer, portfolio, scalable applications"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Kevin Bryan - Web App Developer" />
        <meta
          property="og:description"
          content="Welcome to my portfolio website. Kevin Bryan is a web app developer specializing in building modern and scalable applications."
        />
        <meta property="og:image" content="/snapshot.png" />
        <meta property="og:url" content="https://www.kevbry.in" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Kevin Bryan - Web App Developer"
        />
      </Head>
      <Navbar />
      <Image
        src="/static/assets/gradient.svg"
        alt="gradient"
        width={720}
        height={520}
        className={classes.gradTop}
      />
      <Image
        src="/static/assets/gradient.svg"
        alt="gradient"
        width={720}
        height={520}
        className={classes.gradBtm}
      />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
