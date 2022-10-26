import { Suspense } from "react";

import Layout from "../../components/Layout/Layout";
import classes from "./play.module.css";

import { Canvas, useThree } from "@react-three/fiber";
import { Center, OrbitControls, Text3D } from "@react-three/drei";
import AnimatedSphere from "../../components/3D/AnimatedSphere";
import TextThree from "../../components/3D/TextThree";

export default function Play(props) {
  return (
    <Layout>
      <div className={classes.content}>
        <Canvas
          className={classes.canvas}
          orthographic
          camera={{ position: [0, 0, 100], zoom: 100 }}
        >
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <TextThree />
          </Suspense>
        </Canvas>
        <div className={classes.kurubu}>
          <a href="https://www.tokopedia.com/kurubu">
            <h1>Stop by 🫂 my Shop </h1>
          </a>
          <p>I'm selling my secondhand items here</p>
        </div>
      </div>
    </Layout>
  );
}
