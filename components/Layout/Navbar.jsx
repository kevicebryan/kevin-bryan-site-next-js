import classes from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={classes.nav}>
      <div className={classes.left}>
        <Link href="/">
          <div
            className={`${classes.navitem} ${
              router.pathname === "/" ? classes.active : ""
            }`}
            data-tooltip-id="home-tooltip"
            data-tooltip-content="Let's go home..."
            data-tooltip-place="bottom"
          >
            Home
          </div>
        </Link>
        <Link href="/about">
          <div
            className={`${classes.navitem} ${
              router.pathname === "/about" ? classes.active : ""
            }`}
            data-tooltip-id="about-tooltip"
            data-tooltip-content="get to know more about me, i guess.."
            data-tooltip-place="bottom"
          >
            About
          </div>
        </Link>
      </div>
      <div className={classes.right}>
        <Link href="/projects">
          <div
            className={`${classes.navitem} ${
              router.pathname.includes("/projects") ? classes.active : ""
            }`}
            data-tooltip-id="play-tooltip"
            data-tooltip-content="software projects I have worked on"
            data-tooltip-place="left"
          >
            Work
          </div>
        </Link>

        {/* <Link href="/play">
          <div
            className={`${classes.navitem} ${
              router.pathname === "/play" ? classes.active : ""
            }`}
            data-tooltip-id="play-tooltip"
            data-tooltip-content="my experimental stuff"
            data-tooltip-place="left"
          >
            Play
          </div>
        </Link> */}
      </div>
      <Tooltip
        id="home-tooltip"
        style={{
          backgroundColor: " #0029ff",
          color: "white",
          borderRadius: "8px",
          opacity: "1",
        }}
      />
      <Tooltip
        id="play-tooltip"
        style={{
          backgroundColor: " #0029ff",
          color: "white",
          borderRadius: "8px",
          opacity: "1",
        }}
      />
      <Tooltip
        id="about-tooltip"
        style={{
          backgroundColor: " #0029ff",
          color: "white",
          borderRadius: "8px",
          opacity: "1",
        }}
      />
    </div>
  );
};

export default Navbar;
