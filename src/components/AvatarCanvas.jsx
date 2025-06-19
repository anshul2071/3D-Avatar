import React, {Suspense, useRef} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { OrbitControls, Environment,Html, useGLTF } from '@react-three/drei'
import Loader from './Loader'
import ModelExporter from './ModelExporter'

import 
{ 
  BodyModels,
  HeadModels,
  EarModels,
  EyeModels,
  MouthModels,
  NoseModels,
  LipsModels,
  HairModels,
  OutfitModels,
  AccessoryModels

} from '../components/index'

import useAvatarStore from '../store/avatarStore'



const Avatar = () => {
    const group = useRef()
        const {
            skinColor,
            hairType, hairColor,
            outfitType,
            headType,
            eyeType, noseType,
            mouthType, lipsType, lipsColor,
            accessories,
            bodyType, earType
        } = useAvatarStore()


        const {scene: base} = useGLTF("/models/avatar_base.glb");

        useFrame(() => {
            group.current.rotation.y += 0.01
        })

        base.traverse((child) => {
            if(child.isMesh && child.material.name.includes('Skin')) {
                child.material = child.material.clone()
                child.material.color.set(skinColor)
            }
        })




        return (
            <group ref={group}>
                <primitive object={base} />
                <BodyModels bodyType={bodyType} />
                <HeadModels headType={headType} />
                <EarModels earType={earType} />
                <EyeModels eyeType={eyeType} />
                <MouthModels mouthType={mouthType} />
                <NoseModels noseType={noseType} />
                <LipsModels lipsType={lipsType} lipsColor={lipsColor} />
                <HairModels hairType={hairType} hairColor={hairColor} />
                <OutfitModels outfitType={outfitType} />
                <AccessoryModels accessories={accessories} />


                </group>
        

        )

    }


    export default function AvatarCanvas() {
        return (
            <Canvas camera={{position: [0,1.6,3], fov: 50}} shadows>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
                <Suspense fallback={<Loader />}>
                    <Avatar />
                <Environment preset='studio'/>
                <Html 
                   style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    zIndex: 1,
                   }}
                   portal={false}
                   >
                    <ModelExporter />
                   </Html>
                </Suspense>
                <OrbitControls enablePan = {false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                </Canvas>
        )
    }