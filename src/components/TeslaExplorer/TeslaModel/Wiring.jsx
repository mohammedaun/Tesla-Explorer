import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useStage } from '../../../context/StageContext.jsx'

const RUNS = [
  { pos: [0.6, -0.34, 0.5], len: 1.6, rot: [0, 0, 0] },
  { pos: [0.6, -0.34, -0.5], len: 1.6, rot: [0, 0, 0] },
  { pos: [-0.4, -0.3, 0], len: 1.1, rot: [0, Math.PI / 2, 0] },
]

export default function Wiring() {
  const groupRef = useRef()
  const matRefs = useRef([])
  const { stage } = useStage()

  useFrame((_, delta) => {
    const targetOpacity = stage === 1 ? 1 : 0
    matRefs.current.forEach((mat) => {
      if (!mat) return
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, delta * 3.2)
    })
  })

  const collect = (mat) => {
    if (mat && !matRefs.current.includes(mat)) matRefs.current.push(mat)
  }

  return (
    <group ref={groupRef} name="Wiring">
      {RUNS.map((run, i) => (
        <mesh key={i} position={run.pos} rotation={run.rot} castShadow>
          <cylinderGeometry args={[0.03, 0.03, run.len, 10]} />
          <meshStandardMaterial
            ref={collect}
            color="#ff6b4a"
            transparent
            opacity={0}
            roughness={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}
