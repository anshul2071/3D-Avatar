import React from 'react'
import { useGLTF } from '@react-three/drei'

/**
 * Conditionally render accessories
 * (sunglasses, necklace) or always render
 * selected shoes & cap.
 */
export default function AccessoryModels({ accessories }) {
  const sun       = useGLTF('/models/sunglasses.glb')
  const necklace = useGLTF('/models/necklace.glb')
  const shoes1   = useGLTF('/models/shoes1.glb')
  const shoes2   = useGLTF('/models/shoes2.glb')
  const shoes3   = useGLTF('/models/shoes3.glb')
  const shoes4   = useGLTF('/models/shoes4.glb')
  const shoes5   = useGLTF('/models/shoes5.glb')
  const cap1     = useGLTF('/models/cap1.glb')
  const cap2     = useGLTF('/models/cap2.glb')
  const cap3     = useGLTF('/models/cap3.glb')
  const cap4     = useGLTF('/models/cap4.glb')
  const cap5     = useGLTF('/models/cap5.glb')

  return (
    <>
      {accessories.sunglasses && (
        <primitive object={sun.scene.clone()} position={[0,1.6,0]} />
      )}
      {accessories.necklace && (
        <primitive object={necklace.scene.clone()} position={[0,1.2,0]} />
      )}

      {/* Shoes switch */}
      {(() => {
        switch (accessories.shoes) {
          case 'shoes2': return <primitive object={shoes2.scene.clone()} />
          case 'shoes3': return <primitive object={shoes3.scene.clone()} />
          case 'shoes4': return <primitive object={shoes4.scene.clone()} />
          case 'shoes5': return <primitive object={shoes5.scene.clone()} />
          default:       return <primitive object={shoes1.scene.clone()} />
        }
      })()}

      {/* Cap switch */}
      {(() => {
        switch (accessories.cap) {
          case 'cap2': return <primitive object={cap2.scene.clone()} position={[0,1.8,0]} />
          case 'cap3': return <primitive object={cap3.scene.clone()} position={[0,1.8,0]} />
          case 'cap4': return <primitive object={cap4.scene.clone()} position={[0,1.8,0]} />
          case 'cap5': return <primitive object={cap5.scene.clone()} position={[0,1.8,0]} />
          default:     return <primitive object={cap1.scene.clone()} position={[0,1.8,0]} />
        }
      })()}
    </>
  )
}
