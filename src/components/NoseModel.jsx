import React, {useMemo} from "react";
import { useGLTF } from "@react-three/drei";



export default function NoseModel({noseType}) {
    const nose1 = useGLTF("./models/nose1.glb");
    const nose2 = useGLTF("./models/nose2.glb");
    const nose3 = useGLTF("./models/nose3.glb");



    const model = useMemo(() => {
        switch(noseType) {
            case 'nose2':
                return nose2.scene;
            case 'nose3':
                return nose3.scene;
            default:
                return nose1.scene;
        }
    }, [noseType])


    return <primitive object={model.clone()} />
}