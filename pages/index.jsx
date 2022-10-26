import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import WorkContainer from "../components/Work/WorkContainer";
import classes from "./home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={classes.container}>
        <Hero />
        <WorkContainer />
      </div>
    </Layout>
  );
}
