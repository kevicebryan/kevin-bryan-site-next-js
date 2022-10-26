import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 100]} scale={2.4}>
      <MeshDistortMaterial
        color="#00594f"
        attach="material"
        speed={1.5}
        distort={0.4}
        roughness={0}
      />
    </Sphere>
  );
}
