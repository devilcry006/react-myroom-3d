import { useGLTF } from "@react-three/drei";

export default function Desktop() {
  const { scene } = useGLTF("./models/desk_low-poly.glb");

  return (
    <primitive
      position={[0, 0, 0]}
      scale={[0.005, 0.005, 0.005]}
      rotation={[0, -Math.PI / 2, 0]}
      object={scene}
    />
  );
}
