import Image from "next/image";
import { useState } from "react";
import classes from "./Hero.module.css";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  const [img, setImg] = useState(`/static/assets/kb_c_1.png`);

  const handleMouseEnter = () => {
    setImg(`/static/assets/kb_c_2.png`);
  };
  const handleMouseLeave = () => {
    setImg(`/static/assets/kb_c_1.png`);
  };

  return (
    <div className={classes.hero}>
      <h2>Software Developer</h2>
      <Tilt tiltEnable={true} glareEnable={true} glareColor={"#f5f5f5"}>
        <Image
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={img}
          alt="kevinbryan"
          id="menuImg"
          width="254"
          height="196"
          priority
        />
      </Tilt>
      <div className={classes.bottom}>
        <p className={classes.job}>
          Computer Science Student @ BINUS UNIVERSITY
        </p>
        <p className={classes.location}>Jakarta, Indonesia</p>
      </div>
    </div>
  );
};

export default Hero;
