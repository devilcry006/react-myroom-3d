import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils, Vector3 } from "three";
import { useCameraStore } from "../stores/cameraStore";
import { presets } from "../camera/cameraPresets";


const tempPosition = new Vector3();

export default function CameraController() {
  const { camera, mouse } = useThree();

  const mode = useCameraStore((s) => s.mode);
  const target = useCameraStore((s) => s.target);

  const basePosition = useCameraStore((s) => s.basePosition);
  const baseLookAt = useCameraStore((s) => s.baseLookAt);

  const setMode = useCameraStore((s) => s.setMode);


  const currentLookAt = useRef(
    baseLookAt.clone()
  );

  const positionTarget = useRef(
    basePosition.clone()
  );

  const lookAtTarget = useRef(
    baseLookAt.clone()
  );


  useFrame((_, delta) => {

    /*
      ==========================
      Select Target
      ==========================
    */

    switch (mode) {

      case "default":

        positionTarget.current.copy(
          basePosition
        );

        // mouse parallax
        positionTarget.current.x += mouse.x * 1;
        positionTarget.current.y += mouse.y * 1;


        lookAtTarget.current.copy(
          baseLookAt
        );

        break;


      case "focusing":
      case "focused": {

        const preset = presets[target];

        if (!preset) return;


        positionTarget.current.copy(
          preset.position
        );


        lookAtTarget.current.copy(
          preset.lookAt
        );


        if (
          mode === "focusing" &&
          camera.position.distanceTo(
            preset.position
          ) < 0.05
        ) {
          setMode("focused");
        }


        break;
      }


      case "unfocusing":

        positionTarget.current.copy(
          basePosition
        );


        lookAtTarget.current.copy(
          baseLookAt
        );


        if (
          camera.position.distanceTo(
            basePosition
          ) < 0.05
        ) {
          setMode("default");
        }


        break;
    }



    /*
      ==========================
      Camera Position Damp
      ==========================
    */


    camera.position.x = MathUtils.damp(
      camera.position.x,
      positionTarget.current.x,
      4,
      delta
    );


    camera.position.y = MathUtils.damp(
      camera.position.y,
      positionTarget.current.y,
      4,
      delta
    );


    camera.position.z = MathUtils.damp(
      camera.position.z,
      positionTarget.current.z,
      4,
      delta
    );



    /*
      ==========================
      Camera LookAt Damp
      ==========================
    */


    currentLookAt.current.x = MathUtils.damp(
      currentLookAt.current.x,
      lookAtTarget.current.x,
      6,
      delta
    );


    currentLookAt.current.y = MathUtils.damp(
      currentLookAt.current.y,
      lookAtTarget.current.y,
      6,
      delta
    );


    currentLookAt.current.z = MathUtils.damp(
      currentLookAt.current.z,
      lookAtTarget.current.z,
      6,
      delta
    );


    camera.lookAt(
      currentLookAt.current
    );

  });


  return null;
}