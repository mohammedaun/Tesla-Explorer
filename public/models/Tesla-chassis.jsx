import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/tesla-chassis-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="RootNode" scale={0.01}>
          <group name="Generic_EV_Platform05" position={[85.06, 17.607, 128.991]}>
            <mesh name="Generic_EV_Platform05_WheelBrakeDisk_0" geometry={nodes.Generic_EV_Platform05_WheelBrakeDisk_0.geometry} material={materials.WheelBrakeDisk} />
            <mesh name="Generic_EV_Platform05_WheelPlasticBlackBolt_0" geometry={nodes.Generic_EV_Platform05_WheelPlasticBlackBolt_0.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Generic_EV_Platform03" position={[80.979, 35.216, 128.298]}>
            <mesh name="Generic_EV_Platform03_WheelRimAlum_0" geometry={nodes.Generic_EV_Platform03_WheelRimAlum_0.geometry} material={materials.PaletteMaterial002} />
            <mesh name="Generic_EV_Platform03_WheelRimBlack_1" geometry={nodes.Generic_EV_Platform03_WheelRimBlack_1.geometry} material={materials.PaletteMaterial004} />
            <mesh name="Generic_EV_Platform03_WheelRimColor_2" geometry={nodes.Generic_EV_Platform03_WheelRimColor_2.geometry} material={materials.PaletteMaterial005} />
          </group>
          <group name="Generic_EV_Platform04" position={[84.964, 17.607, 108.871]}>
            <mesh name="Generic_EV_Platform04_WheelCaliper_0" geometry={nodes.Generic_EV_Platform04_WheelCaliper_0.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Generic_EV_Platform06" position={[-80.397, 35.223, 128.321]}>
            <mesh name="Generic_EV_Platform06_WheelRimAlum_0" geometry={nodes.Generic_EV_Platform06_WheelRimAlum_0.geometry} material={materials.PaletteMaterial002} />
            <mesh name="Generic_EV_Platform06_WheelRimBlack_1" geometry={nodes.Generic_EV_Platform06_WheelRimBlack_1.geometry} material={materials.PaletteMaterial004} />
            <mesh name="Generic_EV_Platform06_WheelRimColor_2" geometry={nodes.Generic_EV_Platform06_WheelRimColor_2.geometry} material={materials.PaletteMaterial005} />
          </group>
          <group name="Generic_EV_Platform08" position={[-84.412, 17.607, 128.991]}>
            <mesh name="Generic_EV_Platform08_WheelBrakeDisk_0" geometry={nodes.Generic_EV_Platform08_WheelBrakeDisk_0.geometry} material={materials.WheelBrakeDisk} />
            <mesh name="Generic_EV_Platform08_WheelTireBump_0" geometry={nodes.Generic_EV_Platform08_WheelTireBump_0.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Generic_EV_Platform07" position={[-85.281, 17.607, 110.139]}>
            <mesh name="Generic_EV_Platform07_WheelCaliper_0" geometry={nodes.Generic_EV_Platform07_WheelCaliper_0.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Generic_EV_Platform09" position={[82.01, 35.222, -137.479]}>
            <mesh name="Generic_EV_Platform09_WheelRimAlum_0" geometry={nodes.Generic_EV_Platform09_WheelRimAlum_0.geometry} material={materials.PaletteMaterial002} />
            <mesh name="Generic_EV_Platform09_WheelRimBlack_1" geometry={nodes.Generic_EV_Platform09_WheelRimBlack_1.geometry} material={materials.PaletteMaterial004} />
            <mesh name="Generic_EV_Platform09_WheelRimColor_2" geometry={nodes.Generic_EV_Platform09_WheelRimColor_2.geometry} material={materials.PaletteMaterial005} />
          </group>
          <group name="Generic_EV_Platform11" position={[89.141, 17.607, -137.44]}>
            <mesh name="Generic_EV_Platform11_WheelBrakeDisk_0" geometry={nodes.Generic_EV_Platform11_WheelBrakeDisk_0.geometry} material={materials.WheelBrakeDisk} />
          </group>
          <group name="Generic_EV_Platform10" position={[87.41, 17.607, -115.966]}>
            <mesh name="Generic_EV_Platform10_WheelCaliper_0" geometry={nodes.Generic_EV_Platform10_WheelCaliper_0.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Generic_EV_Platform12" position={[-84.387, 35.203, -137.448]}>
            <mesh name="Generic_EV_Platform12_WheelRimAlum_0" geometry={nodes.Generic_EV_Platform12_WheelRimAlum_0.geometry} material={materials.PaletteMaterial002} />
            <mesh name="Generic_EV_Platform12_WheelRimBlack_1" geometry={nodes.Generic_EV_Platform12_WheelRimBlack_1.geometry} material={materials.PaletteMaterial004} />
            <mesh name="Generic_EV_Platform12_WheelRimColor_2" geometry={nodes.Generic_EV_Platform12_WheelRimColor_2.geometry} material={materials.PaletteMaterial005} />
          </group>
          <group name="Generic_EV_Platform14" position={[-87.812, 17.607, -136.792]}>
            <mesh name="Generic_EV_Platform14_WheelBrakeDisk_0" geometry={nodes.Generic_EV_Platform14_WheelBrakeDisk_0.geometry} material={materials.WheelBrakeDisk} />
            <mesh name="Generic_EV_Platform14_WheelPlasticBlackBolt_0" geometry={nodes.Generic_EV_Platform14_WheelPlasticBlackBolt_0.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="Generic_EV_Platform13" position={[-87.378, 17.607, -114.698]}>
            <mesh name="Generic_EV_Platform13_WheelCaliper_0" geometry={nodes.Generic_EV_Platform13_WheelCaliper_0.geometry} material={materials.PaletteMaterial002} />
          </group>
        </group>
        <mesh name="Generic_EV_Platform_Aluminium_0" geometry={nodes.Generic_EV_Platform_Aluminium_0.geometry} material={materials.PaletteMaterial001} position={[0, 0.206, 0.081]} scale={0.01} />
        <mesh name="Generic_EV_Platform_Chrome_1" geometry={nodes.Generic_EV_Platform_Chrome_1.geometry} material={materials.PaletteMaterial002} position={[0, 0.206, 0.081]} scale={0.01} />
        <mesh name="Generic_EV_Platform_MetalDark_3" geometry={nodes.Generic_EV_Platform_MetalDark_3.geometry} material={materials.PaletteMaterial003} position={[0, 0.206, 0.081]} scale={0.01} />
        <mesh name="Generic_EV_Platform02_PlasticOrange_6" geometry={nodes.Generic_EV_Platform02_PlasticOrange_6.geometry} material={materials.PaletteMaterial006} position={[0, 0.287, -0.683]} scale={0.01} />
      </group>
    </group>
  )
}

useGLTF.preload('/tesla-chassis-transformed.glb')
