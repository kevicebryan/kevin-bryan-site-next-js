import React, { useRef, useState } from "react";
import Eye from "../components/Eye/Eye";

// import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
// import WorkContainer from "../components/Work/WorkContainer";
import classes from "./home.module.css";
import Polaroid from "../components/Polaroid/Polaroid";
import DotGrid from "../components/DotGrid/dotgrid";
import { POLAROID_ITEMS } from "../common/projects";

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

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Layout>
      <link
        href="https://fonts.googleapis.com/css?family=Permanent Marker"
        rel="stylesheet"
      />
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
              <h2>I'm</h2>
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
          className={`${classes.box} ${classes.full} ${classes.quote}`}
          onPointerEnter={handleToggle}
          onPointerLeave={handleToggle}
        >
          <DotGrid className={classes.dotGrid} />
          <div className={classes.dgText}>
            Turning coffee into code, and bugs into features since... <br />{" "}
            <span className={classes.small}> well, this morning.</span>
          </div>
        </div>

        <div className={classes.content}>
          <h1>stuff I've created ✨</h1>
          <div
            className={`${classes.box} ` + classes.polaroidContainer}
            data-tooltip-id="polaroidRole-tooltip"
            data-tooltip-content="Developed various iOS/macOS apps and games."
          >
            {POLAROID_ITEMS.map((polaroid, index) => (
              <Polaroid
                key={index}
                id={polaroid.id}
                title={polaroid.title}
                year={polaroid.year}
                img={polaroid.img}
                description={polaroid.description}
                role={polaroid.role}
                stack={polaroid.stack}
                url={polaroid.url}
                styling={polaroid.style}
                onMouseEnter={() => {
                  setCurrDesc(polaroid.description);
                  setCurrRole(polaroid.role);
                }}
                onMouseLeave={() => {
                  setCurrDesc("");
                  setCurrRole("");
                }}
              />
            ))}
          </div>
        </div>

        <div className={classes.caption}></div>
      </div>
    </Layout>
  );
}
