import { Center, MeshDistortMaterial, Text3D } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import AnimatedSphere from "./AnimatedSphere";

export default function TextThree({ margin = 0.4 }) {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <>
      <Center
        bottom
        right
        position={[-width / 2 + margin, height / 2 - margin, 0]}
      >
        <Text3D
          letterSpacing={-0.06}
          size={0.3}
          font="/static/assets/font/Roboto_Bold.json"
        >
          bonjour!
          <meshStandardMaterial color="#3f3f3f80" />
        </Text3D>
      </Center>
      <Center top left position={[width / 2 - margin, -height / 2 + margin, 0]}>
        <Text3D
          letterSpacing={-0.06}
          size={0.3}
          font="/static/assets/font/Roboto_Bold.json"
        >
          how&#39;s your day
          <meshStandardMaterial color="#3f3f3f80" />
        </Text3D>
      </Center>
      <Center rotation={[-0.5, -0.25, 0]}>
        <Text3D
          curveSegments={28}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.45}
          letterSpacing={-0.06}
          size={1}
          font="/static/assets/font/Roboto_Black.json"
        >
          {`kevin\nbryan`}
          <MeshDistortMaterial
            attach="material"
            color={"#797ED9"}
            roughness={0}
            speed={0.8}
          />
        </Text3D>
        <Center position={[-1.25, 0, 0]}>
          <AnimatedSphere />
        </Center>
      </Center>
    </>
  );
}
