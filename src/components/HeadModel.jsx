import React, { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'

/** Swap head shapes */
export default function HeadModels({ headType }) {
  const h1 = useGLTF('/models/head1.glb')
  const h2 = useGLTF('/models/head2.glb')
  const h3 = useGLTF('/models/head3.glb')
  const h4 = useGLTF('/models/head4.glb')
  const h5 = useGLTF('/models/head5.glb')

  const model = useMemo(() => {
    switch (headType) {
      case 'head2': return h2.scene
      case 'head3': return h3.scene
      case 'head4': return h4.scene
      case 'head5': return h5.scene
      default:      return h1.scene
    }
  }, [headType])

  return <primitive object={model.clone()} />
}
