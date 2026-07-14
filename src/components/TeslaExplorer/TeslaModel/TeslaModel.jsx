import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import Frame from './Frame.jsx'
import BodyShell from './BodyShell.jsx'
import Doors from './Doors.jsx'
import Windows from './Windows.jsx'
import Wheels from './Wheels.jsx'
import Chassis from './Chassis.jsx'
useGLTF.preload('/models/tesla_model_s_prior_design-transformed.glb')


export default function TeslaModel(props) {
  const rootRef = useRef()

  useFrame((_, delta) => {
    if (!rootRef.current) return
    rootRef.current.rotation.y += delta * 0.03
  })

  return (
    <group ref={rootRef} position={[0, 0.55, 0]} {...props}>
    <Chassis />
    <BodyShell />
    </group>
  )
}
