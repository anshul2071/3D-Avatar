import React, {useMemo} from "react";
import { useGLTF } from "@react-three/drei";


export default function EyeMode({eyeType}) {
    const eye1 = useGLTF("./models/eye1.glb");
    const eye2 = useGLTF("./models/eye2.glb");
    const eye3 = useGLTF("./models/eye3.glb");




    const model = useMemo(() => {
        switch(eyeType) {
            case "eye2":
                return eye2.scene
            case "eye3":
                return eye3.scene
            default:
                return eye1.scene
        }
    }, [eyeType])


    return <primitive object={model.clone()} />
}