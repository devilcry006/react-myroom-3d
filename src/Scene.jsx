export default function Scene() {
  return (
    <>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <ambientLight intensity={2} />

      <directionalLight
        position={[3, 5, 5]}
        intensity={2}
      />
    </>
  )
}