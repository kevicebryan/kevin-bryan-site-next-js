import classes from "./Work.module.css";

const Work = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p className={classes.year}>{props.year}</p>
        <p>{props.title}</p>
      </div>
      <div className={classes.content}>
        <a href={props.url}>
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${props.image})` }}
          ></div>
        </a>

        <div className={classes.body}>
          <p>{props.bodyTop}</p>
          <p>{props.bodyBottom}</p>
          <p>Tools used on this project 👇</p>
          <div className={classes.stacks}>
            {props.stack.map((s) => (
              <p className={classes.stack} key={classes.stack}>
                <span className={classes.highlighted}>{s}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
