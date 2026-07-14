import { Environment } from '@react-three/drei'

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[5, 8, 4]}
        intensity={1.1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
      />
      <directionalLight position={[-6, 4, -4]} intensity={0.35} color="#bfe9ee" />
      <Environment preset="studio" />
    </>
  )
}
