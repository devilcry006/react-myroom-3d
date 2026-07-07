function Laptop() {

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry />

      <meshStandardMaterial
        color={hovered ? "orange" : "gray"}
      />
    </mesh>
  )
}