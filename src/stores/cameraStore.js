import { create } from 'zustand'
import * as THREE from 'three'

export const useCameraStore = create((set) => ({
  mode: 'overview',

  isEnabled: true,

  basePosition: new THREE.Vector3(0, 2, 6),

  lookAt: new THREE.Vector3(0, 1, 0),

  setMode: (mode) => set({ mode }),

  setEnabled: () => set((state) => ({ isEnabled: !state.isEnabled })),
}))