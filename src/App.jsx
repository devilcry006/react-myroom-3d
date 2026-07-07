import { Canvas } from "@react-three/fiber";
import CameraController from "./components/CameraController";
import Scene from "./Scene";
import { useCameraStore } from './stores/cameraStore'


function App() {

  const toggleEnabled = useCameraStore((state) => state.setEnabled);

  const handleClick = () => {
    setEnabled();
    console.log("Camera enabled state toggled");
  }
  
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }} id="canvas-container">
      <button onClick={toggleEnabled} style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1000 }}>Test</button>
      <Canvas
        camera={{
          position: [0, 2, 6],
          fov: 40,
        }}
      >
        <CameraController />
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
