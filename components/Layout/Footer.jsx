import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.row}>
        <p>Thanks for stopping by 👋</p>
        <p>Let's Connect</p>
      </div>
      <hr />
      <div className={classes.row}>
        <p>©Kevin Bryan 2022</p>
        <div className={classes.socials}>
          {/* TODO: Add actual ref links */}
          <a
            href="https://github.com/kevicebryan"
            target="_blank"
            className={classes.socialsitem}
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/kkevinbbryan/"
            target="_blank"
            className={classes.socialsitem}
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/bryan-kevin/"
            target="_blank"
            className={classes.socialsitem}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
