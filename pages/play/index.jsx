import Layout from "../../components/Layout/Layout";
import classes from "./play.module.css";

import SetupShowcase from "../../components/SetupShowcase";
import Link from "next/link";
import CoffeeShowcase from "../../components/CoffeeShowcase";

export default function Play() {
  return (
    <Layout>
      <div className={classes.content}>
        <CoffeeShowcase />
        <div className={classes.showcaseWrapper}>
          <SetupShowcase />
        </div>
        <div className={classes.kurubu}>
          <Link href="https://www.tokopedia.com/kurubu" target="_blank">
            <h1>Kev's Garage Sale 🛒</h1>
          </Link>
          <p>I&#39;m selling my secondhand items here 👀</p>
        </div>
      </div>
    </Layout>
  );
}
