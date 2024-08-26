import classes from "./polaroid.module.css";
import Tilt from "react-parallax-tilt";

export default function Polaroid(props) {
  const { styling } = props;
  const { top, left, bottom, right, rotate } = styling;

  return (
    <div
      className={classes.polaroidWrapper}
      style={{
        top,
        left,
        bottom,
        right,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <Tilt>
        <div className={classes.polaroid}>
          <div className={`${classes.bubble} ${classes.role}`}>
            {props.role}
          </div>
          <div className={`${classes.bubble} ${classes.desc}`}>
            {props.description}
          </div>

          <a href={`/projects/${props.id}`} rel="noopener noreferrer">
            <div className={classes.polaroidImage}>
              <img src={props.img} alt="Project Snap.raw" />
            </div>
          </a>
          <div className={classes.rowFull}>
            <div className={classes.techStacksRow}>
              {props.stack.map((stack, index) => (
                <div key={index} className={classes.techStack}>
                  <img src={stack} alt={`tS${index}`} />
                </div>
              ))}
            </div>
            <div className={classes.polaroidText}>{props.title}</div>
          </div>
        </div>
      </Tilt>

      {/* <Tooltip
        id="p1-tooltip"
        style={{
          backgroundColor: " #007aff",
          color: "white",
          borderRadius: "8px",
          opacity: "1",
          zIndex: "10",
        }}
      ></Tooltip>
      <Tooltip
        id="p2-tooltip"
        style={{
          backgroundColor: " #007aff",
          color: "white",
          borderRadius: "8px",
          opacity: "1",
          zIndex: "10",
        }}
      ></Tooltip> */}
    </div>
  );
}
