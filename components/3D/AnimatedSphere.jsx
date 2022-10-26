import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 80, 80]}>
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
