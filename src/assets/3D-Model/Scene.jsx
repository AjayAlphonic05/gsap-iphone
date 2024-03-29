/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 scene.gltf 
Author: PolygonMBW (https://sketchfab.com/PolygonMBW)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/iphone-15-pro-max-made-in-blender-616945ef6bef415889c8748918700bc7
Title: IPhone 15 Pro Max Made In Blender
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useThree } from '@react-three/fiber'



export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')

  let camera = useThree(state => state.camera)

  useLayoutEffect(() =>{
    // gsap.to(camera.position,{x:-1, y:0.5})

    let t1 = gsap.timeline({
      scrollTrigger:{

        trigger: "#phoneModal",
        start: "top top",
        end: "bottom+=500 bottom",
       
        
      }
    })

    t1.fromTo(camera.position, {y:4.5}, {y:0})
  },[])
  

  return (
    <group {...props} dispose={null}>
      <group position={[-0.016, 0.284, 0.371]} rotation={[0, 0.641, 0]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Natural_Titanium} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Natural_Back_Glass} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.020']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Natural_Titanium_Screen} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Speaker_Mesh} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Speaker_Mesh} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Speaker_Mesh} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Camera_Lens} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Camera_Glass} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Flash_Light} />
        <mesh geometry={nodes.Object_20.geometry} material={materials['Titanium_-__Pure_1']} />
        <mesh geometry={nodes.Object_21.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Senser} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Edge} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Material} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
