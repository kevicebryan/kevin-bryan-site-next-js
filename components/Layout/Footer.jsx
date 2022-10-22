import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.row}>
        <p>Thanks for stopping by 👋</p>
        <p>Let&#39;s Connect</p>
      </div>
      <hr />
      <div className={classes.row}>
        <p>©Kevin Bryan 2022</p>
        <div className={classes.socials}>
          {/* TODO: Add actual ref links */}
          <a
            href="https://github.com/kevicebryan"
            className={classes.socialsitem}
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/kkevinbbryan/"
            className={classes.socialsitem}
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/bryan-kevin/"
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
