import React, {useMemo} from "react"
import { useGLTF } from "@react-three/drei";



export default function HairModels({hairType, hairColor}) {
    const hair1 = useGLTF("./models/hair1.glb");
    const hair2 = useGLTF("./models/hair2.glb");
    const hair3 = useGLTF("./models/hair3.glb");
    const hair4 = useGLTF("./models/hair4.glb");
    const hair5 = useGLTF("./models/hair5.glb");




    const model = useMemo(() => {
        switch(hairType) {
             case "hair2":
                return
                 hair2.scene
             case "hair3":
                 return
                 hair3.scene
             case "hair4":
                 return
                 hair4.scene
             case "hair5":
                 return
                 hair5.scene
             default:
                 return
                 hair1.scene
        }
    }, [hairType])



    const clone = model.clone()
    clone.traverse((child) => {
        if(child.isMesh) {
            child.material = child.material.clone()
            child.material.color.set(hairColor)
        }
    })


    return <primitive object={clone} />
}