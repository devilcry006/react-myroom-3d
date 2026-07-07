import { Vector3 } from "three";

export const presets = {
  laptop: {
    position: new Vector3(0.8, 1.5, 2),
    lookAt: new Vector3(0, 1, 0),
  },

  coffee: {
    position: new Vector3(1.5, 1.3, 2.2),
    lookAt: new Vector3(1, 1, 0),
  },

  desk: {
    position: new Vector3(0, 2, 3),
    lookAt: new Vector3(0, 1, 0),
  },
};