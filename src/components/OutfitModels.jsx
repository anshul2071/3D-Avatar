import React, {useMemo} from "react";
import { useGLTF } from "@react-three/drei";


export default function OutFitModel({outfitType}) {
    const outf1 = useGLTF("./models/outfit1.glb");
    const outf2 = useGLTF("./models/outfit2.glb");
    const outf3 = useGLTF("./models/outfit3.glb");
    const outf4 = useGLTF("./models/outfit4.glb");
    



    const model = useMemo(() => {
        switch(outfitType) {
            case "outfit2":
                return outf2.scene
            case "outfit3":
                return outf3.scene
            case "outfit4":
                return outf4.scene
            default:
                return outf1.scene
        }
    }, [outfitType])


    return <primitive object={model.clone()} />

}