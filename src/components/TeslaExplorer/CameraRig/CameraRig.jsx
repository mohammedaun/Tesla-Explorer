import { OrbitControls } from '@react-three/drei'

export default function CameraRig() {
  return (
    <OrbitControls
      enablePan={false}
      minDistance={4.2}
      maxDistance={9}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI / 2.05}
      enableDamping
      dampingFactor={0.08}
      rotateSpeed={0.6}
      zoomSpeed={0.6}
    />
  )
}
