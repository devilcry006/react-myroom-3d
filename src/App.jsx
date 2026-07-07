import { Canvas } from "@react-three/fiber";
import CameraController from "./components/CameraController";
import Scene from "./Scene";
import { useCameraStore } from "./stores/cameraStore";
import { OrbitControls } from "@react-three/drei";

function App() {
  const reset = useCameraStore((s) => s.reset);
  const mode = useCameraStore((s) => s.mode);

  return (
    <div
      style={{ width: "100%", height: "100vh", position: "relative" }}
      id="canvas-container"
    >
      {mode !== "default" && <button
        onClick={reset}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 1000,
        }}
      >
        Back
      </button>}
      <Canvas
        camera={{
          position: [0, 2, 6],
          fov: 40,
        }}
      >
        {/* <OrbitControls /> */}
        <CameraController />
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
