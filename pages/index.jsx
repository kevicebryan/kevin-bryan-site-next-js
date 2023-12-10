import React, { useRef, useState } from "react";
import Eye from "../components/Eye/eye";
import Tilt from "react-parallax-tilt";

// import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
// import WorkContainer from "../components/Work/WorkContainer";
import classes from "./home.module.css";

export default function Home() {
  // FOR EYE HERO
  const [isMouseOver, setIsMouseOver] = useState(false);
  const mouse = useRef({ x: 0, y: 0 }).current;
  const onMouseMove = (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  };

  // // FOR SLOGAN
  const [isBack, setIsBack] = useState(true);
  const handleToggle = () => {
    setIsBack(!isBack);
  };

  return (
    <Layout>
      <link
        href="https://fonts.googleapis.com/css?family=Permanent Marker"
        rel="stylesheet"
      ></link>
      <div
        className={classes.container}
        onPointerEnter={() => {
          setIsMouseOver(true);
        }}
        onPointerLeave={() => {
          setIsMouseOver(false);
        }}
        onPointerMove={onMouseMove}
      >
        <div className={classes.hero}>
          <div className={classes.box}>
            <div className={classes.rowspaced}>
              <h2>Hi,</h2>
              <h2>It's</h2>
            </div>
            <h1>
              <span className={classes.selected}>KEV</span>
              IN
            </h1>
            <h1>BRYAN</h1>
          </div>
          <div className={`${classes.box} ${classes.hor}`}>
            <div className={classes.rect}>
              <div className={classes.rect}>
                <div className={classes.rect}>
                  <div className={classes.rect}>
                    <div className={classes.row}>
                      <Eye
                        initialRotation={0}
                        mouse={mouse}
                        isMouseOver={isMouseOver}
                      />
                      <Eye
                        initialRotation={0}
                        mouse={mouse}
                        isMouseOver={isMouseOver}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${classes.box} ${classes.full}`}
          onPointerEnter={handleToggle}
          onPointerLeave={handleToggle}
        >
          <div
            className={`${isBack ? classes.back : classes.front} ${
              classes.backText
            }`}
          >
            OB
            <div className={classes.shine}>S</div>
            ERVE, T<div className={classes.shine}>H</div>
            <div className={classes.shine}>I</div>
            <div className={classes.shine}>N</div>
            K, COD <div className={classes.shine}>E</div>.
          </div>
          <div
            className={`${!isBack ? classes.back : classes.front} ${
              classes.frontText
            }`}
          >
            that's pretty much what i do.
          </div>
        </div>

        <div className={classes.content}>
          <h1>stuff I've created ✨</h1>

          <div className={`${classes.box} ` + classes.polaroidContainer}>
            <div className={classes.polaroidWrapper}>
              <Tilt>
                <div className={classes.polaroid}>
                  <div className={classes.polaroidImage}>
                    <img src="" alt="Project Snap.raw" />
                  </div>
                  <div className={classes.rowFull}>
                    <div className={classes.techStacksRow}>
                      <div className={classes.techStack}></div>
                      <div className={classes.techStack}></div>
                      <div className={classes.techStack}></div>
                    </div>
                    <div className={classes.polaroidText}>project Name</div>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>

        <div className={classes.caption}>
          sorry mobile viewers, I didn't design this to be responsive YET. :_)
        </div>
      </div>
    </Layout>
  );
}
