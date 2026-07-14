import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useStage } from '../../../context/StageContext.jsx'

const POSITIONS = [
  [1.55, -0.42, 0.95],
  [-1.55, -0.42, 0.95],
  [1.55, -0.42, -0.95],
  [-1.55, -0.42, -0.95],
]

function Wheel({ basePos }) {
  const ref = useRef()
  const { stage } = useStage()

  useFrame((_, delta) => {
    if (!ref.current) return
    const outward = stage > 0 ? 0.08 : 0
    const dir = Math.sign(basePos[0]) || 1
    const targetX = basePos[0] + outward * dir
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, targetX, delta * 3.5)
  })

  return (
    <group ref={ref} position={basePos}>
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.32, 24]} />
        <meshStandardMaterial color="#1c1f21" roughness={0.6} metalness={0.1} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.24, 0.24, 0.34, 20]} />
        <meshStandardMaterial color="#d7dad9" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  )
}

export default function Wheels() {
  return (
    <group name="Wheels">
      {POSITIONS.map((p, i) => (
        <Wheel key={i} basePos={p} />
      ))}
    </group>
  )
}
