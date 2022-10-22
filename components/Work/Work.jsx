import classes from "./Work.module.css";

const Work = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>{props.year}</p>
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
          <div className={classes.link}>
            <a href={props.url}>👉 Check it out! 👈</a>
          </div>
          <p>{props.bodyTop}</p>
          <p>{props.bodyBottom}</p>
          <p>This site is built using:</p>
          <div className={classes.stacks}>
            {props.stack.map((s) => (
              <p className={classes.stack} key={classes.stack}>
                ⚙️ {s}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
