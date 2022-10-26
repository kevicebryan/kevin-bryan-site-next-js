import { Suspense } from "react";

import Layout from "../../components/Layout/Layout";
import classes from "./play.module.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "../../components/3D/AnimatedSphere";

export default function Play(props) {
  return (
    <Layout>
      <div className={classes.content}>
        <h1 className={classes.title}>
          C<span className={classes.o}>O</span>MING S
          <span className={classes.o}>OO</span>N
        </h1>
        <Canvas className={classes.canvas}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </div>
    </Layout>
  );
}
