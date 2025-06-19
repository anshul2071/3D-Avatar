import React, {use, useMemo} from "react";
import { useGLTF } from "@react-three/drei";



export default function EarModel({earType}) {
    const ear1 = useGLTF("./models/ear1.glb");
    const ear2 = useGLTF("./models/ear2.glb");
    const ear3 = useGLTF("./models/ear3.glb");

    const model = useMemo(() => {
        switch(earType) {
            case "ear2":
                return ear2.scene
            case "ear3":
                return ear3.scene
            default:
                return ear1.scene
        }
    }, [earType])




    return <primitive object={model.clone()} />
}