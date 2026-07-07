import { useFrame, useThree } from '@react-three/fiber'
import { MathUtils, Vector3 } from 'three'
import { useCameraStore } from '../stores/cameraStore'

const targetPosition = new Vector3()
const targetLookAt = new Vector3()

export default function CameraController() {
  const { camera, mouse } = useThree()

  const basePosition = useCameraStore((state) => state.basePosition)
  const lookAt = useCameraStore((state) => state.lookAt)
  const mode = useCameraStore((state) => state.mode)
  const isEnabled = useCameraStore((state) => state.isEnabled)

  useFrame((state, delta) => {
    if (!isEnabled) return

    // ===== Position =====
    targetPosition.copy(basePosition)

    targetPosition.x += mouse.x * 0.5
    targetPosition.y += mouse.y * 0.5

    camera.position.x = MathUtils.damp(
      camera.position.x,
      targetPosition.x,
      4,
      delta
    )

    camera.position.y = MathUtils.damp(
      camera.position.y,
      targetPosition.y,
      4,
      delta
    )

    camera.position.z = MathUtils.damp(
      camera.position.z,
      targetPosition.z,
      4,
      delta
    )

    // ===== LookAt =====
    // targetLookAt.copy(lookAt)

    // targetLookAt.x += mouse.x * 0.05
    // targetLookAt.y += mouse.y * 0.02

    // camera.lookAt(targetLookAt)
  })

  return null
}