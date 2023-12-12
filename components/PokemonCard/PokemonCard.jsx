import classes from "./pokemoncard.module.css";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

export default function PokemonCard(props) {
  return (
    <Tilt>
      <div className={`${classes.cardContainer} ${classes.cardShine}`}>
        <div className={classes.cardBody}>
          <div className={classes.cardHeader}>
            <div className={classes.left}>
              <p>DEVELOPER</p>
            </div>
            <div className={classes.right}>Full Stack</div>
          </div>
          <div className={classes.cardName}>
            <h1>Kevin Bryan</h1>
          </div>

          <div className={classes.description}>
            A tech enthusiast with high aspiration to keep on growing and learn
            new stuff.
          </div>
          <div className={classes.factContainer}>
            <div className={classes.fact}>
              <p>a coder, stoic geek, and matcha connoisseur</p>
            </div>
          </div>
        </div>

        <div className={classes.imgContainer}>
          {/* <img src="" alt="" className={classes.bgImage} /> */}
          <img
            src="static/assets/about/profile_image.png"
            alt="imagine an image of Kevin is here"
            className={classes.frontImage}
          />
        </div>
      </div>
    </Tilt>
  );
}
