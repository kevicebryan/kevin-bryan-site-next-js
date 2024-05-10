import React, { useRef, useState } from "react";
import Eye from "../components/Eye/Eye";

// import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
// import WorkContainer from "../components/Work/WorkContainer";
import classes from "./home.module.css";
import Polaroid from "../components/Polaroid/Polaroid";

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
          className={`${classes.box} ${classes.full} ${classes.quote}`}
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
          <div
            className={`${classes.box} ` + classes.polaroidContainer}
            data-tooltip-id="polaroidRole-tooltip"
            data-tooltip-content="Developed various iOS/macOS apps and games."
          >
            {POLAROID_ITEMS.map((polaroid, index) => (
              <Polaroid
                key={index}
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

class PolaroidItem {
  constructor(
    title = "",
    year = 0,
    description = "",
    role = "",
    img = "",
    stack = [],
    url = "",
    style = {}
    // zIndex = 1
  ) {
    this.title = title;
    this.year = year;
    this.description = description;
    this.role = role;
    this.img = img;
    this.stack = stack;
    this.url = url;
    this.style = style;
  }
}

const POLAROID_ITEMS = [
  new PolaroidItem(
    "Wordle Clone",
    2022,
    "worlde created using vanilla JS.",
    "Developer",
    "static/assets/work_images/wordle.png",
    [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    ],
    "https://kevicebryan.github.io/src/WORDLE_clone/index.html",
    { bottom: "-8em", left: "32%", rotate: "-5" }
  ),
  new PolaroidItem(
    "W3B Scholar",
    2022,
    "a website for web3 enthusiast to get to know more about web3, blockchian, and the metaverse.",
    "FrontEnd Developer",
    "static/assets/work_images/w3b-scholar.png",
    [
      "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
      "https://yt3.googleusercontent.com/GsP5Yvc5jOSop4SJf_75wdOYaEbO-7ZyYhnARodAGRnEMh-OQjGPGzUz2ZtzsHPtqFyHGvmbEtI=s900-c-k-c0x00ffffff-no-rj",
    ],
    "https://w3b-scholar.vercel.app/",
    { top: "4em", left: "25%", rotate: "0" }
  ),
  new PolaroidItem(
    "My Rail Travel",
    2023,
    "a landmark recommendation app created during MRT Hackathon,\nfeaturing an AR to scan exit signs popping up what destination lies ahead.",
    "Tech Lead",
    "static/assets/work_images/my-rail-travel.gif",
    [
      "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png",
      "https://static.wikia.nocookie.net/ipod/images/4/44/Reality_Composer_macOS_icon.png",
      "https://i.pinimg.com/originals/d2/ae/e4/d2aee4bcb7a6f5ec4c1d288bc8c04951.png",
    ],
    "#",
    { bottom: "-5em", right: "15%", rotate: "8" }
  ),
  new PolaroidItem(
    "Lug N Loaded",
    2023,
    "a fast paced 2D puzzle multiplayer game where players act as robbers, they must fit all the goods into 1 luggage.",
    "Tech Lead & Project Manager",
    "static/assets/work_images/lug-n-loaded.png",
    [
      "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png",
      "https://miro.medium.com/v2/resize:fit:572/1*-lPVtpH51_QwfwHJEPqLKw.png",
      "https://developer.apple.com/assets/elements/icons/game-center/game-center-128x128_2x.png",
    ],
    "https://drive.google.com/file/d/1eSCJ6wbN6RkXBK3X1TjY1bfG3UpAhjTv/view?usp=sharing",
    { top: "1.5em", right: "22%", rotate: "-10" }
  ),
  new PolaroidItem(
    "Flanner",
    2023,
    "family planner, for those who are unsure of what to do during their quality time, get recommendation based on your mutual interests.",
    "Tech Lead",
    "static/assets/work_images/flanner.png",
    [
      "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png",
      "https://w7.pngwing.com/pngs/106/569/png-transparent-core-data-software-framework-database-apple-angle-fruit-nut-electric-blue.png",
    ],
    "https://apps.apple.com/id/app/flanner/id6463742782",
    { bottom: "-1em", right: "-2em", rotate: "24" }
  ),

  new PolaroidItem(
    "Pikolo",
    2023,
    "a cash flow manager, designed and created who wants to keep track of their spending, lending, and more",
    "Developer, Designer, Product Owner",
    "static/assets/work_images/pikolo.png",
    [
      "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png",
      "https://w7.pngwing.com/pngs/106/569/png-transparent-core-data-software-framework-database-apple-angle-fruit-nut-electric-blue.png",
      "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format",
    ],
    "https://apps.apple.com/id/app/pikolo-cash-flow-manager/id6463812788",
    { top: "50%", left: "10%", rotate: "12" }
  ),
  new PolaroidItem(
    "Mission: A1",
    2023,
    "a first perosn open world explorative game, where players get to explore not only the map, but also various mechanics.",
    "Tech Lead",
    "static/assets/work_images/missionA1.png",
    [
      "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png",
      "https://cdn.pixabay.com/photo/2021/10/20/01/20/mac-os-logo-6724894_1280.png",
    ],
    "https://www.linkedin.com/posts/bryan-kevin_unity-unity3d-macos-activity-7135505729792196608-Lr6e?utm_source=share&utm_medium=member_desktop",
    { top: "20%", left: "-3em", rotate: "-20" }
  ),
];
