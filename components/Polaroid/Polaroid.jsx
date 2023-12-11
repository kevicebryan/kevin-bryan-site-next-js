import classes from "./polaroid.module.css";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

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
          <div className={classes.polaroidImage}>
            <img src={props.img} alt="Project Snap.raw" />
          </div>
          <div className={classes.rowFull}>
            <div className={classes.techStacksRow}>
              {props.stack.map((stack, index) => (
                <div key={index} className={classes.techStack}>
                  <img src={stack} alt={`tS${index}`} />
                </div>
              ))}
            </div>
            <Link href={`${props.url}`}>
              <div className={classes.polaroidText}>{props.title}</div>
            </Link>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
