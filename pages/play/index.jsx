import { Suspense } from "react";

import Layout from "../../components/Layout/Layout";
import classes from "./play.module.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TextThree from "../../components/3D/TextThree";
import Spotify from "../../components/Spotify/Spotify";

export default function Play() {
  return (
    <Layout>
      <div className={classes.content}>
        <iframe
          src="https://my.spline.design/my3davatar-af24a57fab0bbd0414d0c28f23417298/"
          frameborder="0"
          width="100%"
          height="100%"
          className={classes.spline}
        ></iframe>
        <Canvas
          className={classes.canvas}
          orthographic
          camera={{ position: [0, 0, 100], zoom: 80 }}
        >
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <TextThree />
          </Suspense>
        </Canvas>
        {/* <Spotify /> */}
        <div className={classes.kurubu}>
          <a href="https://www.tokopedia.com/kurubu">
            <h1>Stop by 🫂 my Shop </h1>
          </a>
          <p>I&#39;m selling my secondhand items here</p>
        </div>
      </div>
    </Layout>
  );
}
