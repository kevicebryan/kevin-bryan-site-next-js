import classes from "./Hero.module.css";

const Hero = () => {
  function onHover() {
    const img = document.getElementById("menuImg");
    img.src = "static/assets/kb_c_2.png";
  }

  function offHover() {
    const img = document.getElementById("menuImg");
    img.src = "static/assets/kb_c_1.png";
  }

  return (
    <div className={classes.hero}>
      <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
      <h5>WEB DEVELOPER</h5>
      <img
        src="/static/assets/kb_c_1.png"
        alt="kevinbryan"
        id="menuImg"
        onMouseOver={onHover}
        onMouseOut={offHover}
      />
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
