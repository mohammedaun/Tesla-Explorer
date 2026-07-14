import { ContactShadows } from '@react-three/drei'

export default function Podium() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.72, 0]} receiveShadow>
        <circleGeometry args={[3.1, 64]} />
        <meshStandardMaterial color="#f5f7f6" metalness={0.25} roughness={0.4} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.715, 0]}>
        <ringGeometry args={[2.85, 2.9, 64]} />
        <meshStandardMaterial color="#009faf" emissive="#009faf" emissiveIntensity={0.4} />
      </mesh>

      <ContactShadows
        position={[0, -0.71, 0]}
        opacity={0.45}
        scale={9}
        blur={2.4}
        far={2}
        resolution={1024}
        color="#0b1f22"
      />
    </group>
  )
}
