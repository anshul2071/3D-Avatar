import React from "react";
import {Html, useProgress} from '@react-three/drei';
import {Spinner, Center} from '@chakra-ui/react';



export default function Loader () {
    const {progress} = useProgress();
    return (
        <Html center>
            <Center flexDir = 'column'>
                <Spinner size = 'xl'/>
                <p>{progress.toFixed(2)}%loaded</p>
            </Center>
        </Html>
          
    );
    
}
