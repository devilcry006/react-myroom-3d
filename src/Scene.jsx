import MeshObject from './components/MeshObject';
import Desk from './components/Desk';

export default function Scene() {
  return (
    <>
      <MeshObject id="desk">
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </MeshObject>
      <Desk />
      <ambientLight intensity={2} />
      <directionalLight position={[3, 5, 5]} intensity={2} />
    </>
  );
}
