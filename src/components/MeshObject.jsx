import { useObjectStore } from "../stores/objectStore";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { useRef } from "react";

export default function MeshObject({ id, children }) {
  const groupRef = useRef();

  const hovered = useObjectStore((state) => state.hovered);
  const setHovered = useObjectStore((state) => state.setHovered);
  const setSelected = useObjectStore((state) => state.setSelected);

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
    console.log("Selecting object with id:", id);
    setSelected(id);
  };

  useFrame((_, delta) => {
    const targetScale = hovered === id ? 1.05 : 1;

    groupRef.current.scale.x = MathUtils.damp(
      groupRef.current.scale.x,
      targetScale,
      8,
      delta
    );

    groupRef.current.scale.y = MathUtils.damp(
      groupRef.current.scale.y,
      targetScale,
      8,
      delta
    );

    groupRef.current.scale.z = MathUtils.damp(
      groupRef.current.scale.z,
      targetScale,
      8,
      delta
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
