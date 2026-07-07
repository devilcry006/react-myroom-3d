import { useObjectStore } from "../stores/objectStore";
import { useCameraStore } from "../stores/cameraStore";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { useRef } from "react";

const presets = {
  laptop: {
    position: [0.5, 1.5, 1.8],
    lookAt: [0, 1, 0],
  },

  coffee: {
    position: [1.2, 1.2, 2],
    lookAt: [1, 0.8, 0],
  },
};

export default function MeshObject({ id, children }) {
  const groupRef = useRef();

  const hovered = useObjectStore((state) => state.hovered);
  const setHovered = useObjectStore((state) => state.setHovered);
  const setSelected = useObjectStore((state) => state.setSelected);

  const mode = useCameraStore((s) => s.mode);
  const setMode = useCameraStore((s) => s.setMode);
  const setTarget = useCameraStore((s) => s.setTarget);

  const handleHover = (event) => {
    event.stopPropagation();
    console.log("Hovering over object with id:", id);
    setHovered(id);
  };

  const handleUnhover = (event) => {
    event.stopPropagation();
    console.log("Unhovering object with id:", id);
    setHovered(null);
  };

  const handleSelect = (event) => {
    event.stopPropagation();
    setTarget(id);
    setMode("focusing");
  };

  useFrame((_, delta) => {
    const targetScale = hovered === id ? 1.05 : 1;

    if (mode === "focusing" || mode === "focused") return;
    groupRef.current.scale.x = MathUtils.damp(
      groupRef.current.scale.x,
      targetScale,
      8,
      delta,
    );

    groupRef.current.scale.y = MathUtils.damp(
      groupRef.current.scale.y,
      targetScale,
      8,
      delta,
    );

    groupRef.current.scale.z = MathUtils.damp(
      groupRef.current.scale.z,
      targetScale,
      8,
      delta,
    );
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={handleHover}
      onPointerOut={handleUnhover}
      onClick={handleSelect}
    >
      {children}
    </group>
  );
}
