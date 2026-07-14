import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useStage } from '../../../context/StageContext.jsx'

const SIDES = [1, -1]

function DoorPanel({ side }) {
  const ref = useRef()
  const matRef = useRef()
  const { stage } = useStage()

  useFrame((_, delta) => {
    if (!ref.current) return
    const targetZ = stage === 0 ? side * 0.86 : stage === 1 ? side * 1.9 : side * 3.2
    const targetOpacity = stage === 0 ? 1 : stage === 1 ? 0.4 : 0

    ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, targetZ, delta * 2.4)
    if (matRef.current) {
      matRef.current.opacity = THREE.MathUtils.lerp(matRef.current.opacity, targetOpacity, delta * 3)
    }
  })

  return (
    <mesh ref={ref} position={[0.1, 0.1, side * 0.86]} castShadow>
      <boxGeometry args={[1.9, 0.5, 0.06]} />
      <meshStandardMaterial ref={matRef} color="#eef0ef" metalness={0.3} roughness={0.3} transparent opacity={1} />
    </mesh>
  )
}

export default function Doors() {
  return (
    <group name="Doors">
      {SIDES.map((s) => (
        <DoorPanel key={s} side={s} />
      ))}
    </group>
  )
}
