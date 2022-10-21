import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import WorkContainer from "../components/Work/WorkContainer";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WorkContainer />
    </Layout>
  );
}
