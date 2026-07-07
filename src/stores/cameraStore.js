import { create } from "zustand";
import * as THREE from "three";

export const useCameraStore = create((set) => ({
  // default | focusing | focused | unfocusing
  mode: "default",

  target: null,

  isEnabled: true,

  basePosition: new THREE.Vector3(0, 2, 6),
  baseLookAt: new THREE.Vector3(0, 1, 0),

  setTarget: (target) =>
    set({
      target,
      mode: "focusing",
    }),

  setMode: (mode) =>
    set({
      mode,
    }),

  setEnabled: (enabled) =>
    set({
      isEnabled: enabled,
    }),

  reset: () =>
    set({
      mode: "unfocusing",
    }),

  clearTarget: () =>
    set({
      target: null,
    }),
}));