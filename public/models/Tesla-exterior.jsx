import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tesla-exterior-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.hub_rb_hub_rb0_0.geometry} material={materials['hub_rb.0']} position={[89.834, -37.177, 144.654]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.hub_rf_hub_rf0_0.geometry} material={materials['hub_rf.0']} position={[92.416, -37.179, -175.66]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.hub_rf_hub_rf1_0.geometry} material={materials['hub_rf.1']} position={[92.416, -37.179, -175.66]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.dvorright_dvorright0_0.geometry} material={materials['dvorright.0']} position={[-8.295, 17.731, -160.464]} rotation={[-0.615, 0, 0]} scale={100} />
      <mesh geometry={nodes.movsteer_10_movsteer_101_0.geometry} material={materials['movsteer_1.0.1']} position={[-46.995, 17.581, -60.792]} rotation={[-1.878, 0, 0]} scale={100} />
      <mesh geometry={nodes.movsteer_10_movsteer_100_0.geometry} material={materials['movsteer_1.0.0']} position={[-46.995, 17.581, -60.792]} rotation={[-1.878, 0, 0]} scale={100} />
      <mesh geometry={nodes.chassis_chassis0_0.geometry} material={materials.PaletteMaterial001} position={[0, -36.241, -177.061]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.body_primary_0.geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.bodysills_primary001_0.geometry} material={materials['primary.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.back_chrome_light_back_chrome_light0_0.geometry} material={materials['back_chrome_light.0']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.pantulans_pantulans0_0.geometry} material={materials['pantulans.0']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.rear_lights_right_rear_light_0.geometry} material={materials.right_rear_light} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.light_breake_breaklight_l_0.geometry} material={materials.breaklight_l} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.aluminium_light_aluminium_light0_0.geometry} material={materials['aluminium_light.0']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.tembus_red_tembus_red0_0.geometry} material={materials['tembus_red.0']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.belt_belt0_0.geometry} material={materials['belt.0']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.satin_red_satin_red0_0.geometry} material={materials['satin_red.0']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Putih_Putih0_0.geometry} material={materials['Putih.0']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.texture_Buttons_texture_Buttons0_0.geometry} material={materials['texture_Buttons.0']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.LCDs_LCDs0_0.geometry} material={materials['LCDs.0']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mirror_inside_mirror_inside0_0.geometry} material={materials.PaletteMaterial003} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.glass_glass0_0.geometry} material={materials['glass.0']} position={[0, 57.252, -72.903]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.glass_glass1_0.geometry} material={materials['glass.1']} position={[0, 57.252, -72.903]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.door_lf_primary002_0.geometry} material={materials['primary.002']} position={[-100.598, -6.257, -117.528]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.light_pantulan_light_pantulan0_0.geometry} material={materials['light_pantulan.0']} position={[87.334, 28.138, 192.876]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.wheels_wheels2_0.geometry} material={materials['wheels.2']} position={[92.5, -37.175, -175.665]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.wheels_wheels0_0.geometry} material={materials['wheels.0']} position={[92.5, -37.175, -175.665]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.wheels_wheels3_0.geometry} material={materials['wheels.3']} position={[92.5, -37.175, -175.665]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.wheels_wheels4_0.geometry} material={materials['wheels.4']} position={[92.5, -37.175, -175.665]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.wheels_wheels6_0.geometry} material={materials['wheels.6']} position={[92.5, -37.175, -175.665]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/tesla-exterior-transformed.glb')
