import classes from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const logoClickHandler = () => {
    router.push("/");
  };

  return (
    <div className={classes.nav}>
      <Link href="/">
        <a className={classes.navitem}>Kevin Bryan</a>
      </Link>
      <img src="/static/assets/k.png" alt="k-logo" onClick={logoClickHandler} />
      <div className={classes.right}>
        <Link href="/">
          <a className={classes.navitem}>Play</a>
        </Link>
        <Link href="/about">
          <a className={classes.navitem}>About</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
