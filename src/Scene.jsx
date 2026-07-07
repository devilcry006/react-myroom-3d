import MeshObject from "./components/MeshObject";
import Desk from "./components/Desk";

export default function Scene() {
  return (
    <>
      <MeshObject id="desk">
        <Desk />
      </MeshObject>
      <ambientLight intensity={2} />
      <directionalLight position={[3, 5, 5]} intensity={2} />
    </>
  );
}
