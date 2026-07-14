import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useStage } from '../../../context/StageContext.jsx'

const CORNERS = [
  [1.55, -0.1, 0.95],
  [-1.55, -0.1, 0.95],
  [1.55, -0.1, -0.95],
  [-1.55, -0.1, -0.95],
]

export default function Suspension() {
  const matRefs = useRef([])
  const { stage } = useStage()

  useFrame((_, delta) => {
    const targetOpacity = stage === 0 ? 0 : 1
    matRefs.current.forEach((mat) => {
      if (!mat) return
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, delta * 3)
    })
  })

  const collect = (mat) => {
    if (mat && !matRefs.current.includes(mat)) matRefs.current.push(mat)
  }

  return (
    <group name="Suspension">
      {CORNERS.map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 0.5, 12]} />
          <meshStandardMaterial ref={collect} color="#009faf" metalness={0.6} roughness={0.3} transparent opacity={0} />
        </mesh>
      ))}
    </group>
  )
}
