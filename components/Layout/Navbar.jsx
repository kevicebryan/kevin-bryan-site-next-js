import classes from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

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
      <Image
        src="/static/assets/k.png"
        alt="k-logo"
        onClick={logoClickHandler}
        width={29}
        height={40}
        priority
      />
      <div className={classes.right}>
        <Link href="/play">
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
