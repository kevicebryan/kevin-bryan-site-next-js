import classes from "./spotify.module.css";

export default function Spotify(props) {
  return (
    <div className={classes.card}>
      <div className={classes.top}>
        <div className={classes.topImg}></div>
        <div className={classes.topText}>
          <h5>KB's Mix</h5>
          <p>Crush, Drake, Ka...</p>
        </div>
        <img src="/static/assets/kcircle.png" alt="logo" />
      </div>
      <div className={classes.bottom}>
        <div className={classes.botImg}></div>
        <div className={classes.botImg}></div>
        <div className={classes.botImg}></div>
        <div className={classes.botImg}></div>
      </div>
    </div>
  );
}
