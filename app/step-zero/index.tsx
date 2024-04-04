'use client'
import { Canvas, useFrame} from "@react-three/fiber";
import { Mesh, Vector3 } from "three";
import {useRef} from 'react'

export default function FirstStep() {
    
    return (
        <Canvas className="h-full">
            <directionalLight position={[0, 0, 2]} intensity={.5}/>
            <ambientLight intensity={.1}/>
            <pointLight  position={[10, 10, 10]} />
            <Cube  position={new Vector3(0, 0, 9)} color="orange" size={[1, 1, 1]}/>
    </Canvas>

    );
}

function Cube({position, color, size}: {position: Vector3, color: string, size: number[]}) {
    const ref = useRef<Mesh | null>(null)
    useFrame((state, delta) => {
        if(ref.current && ref.current.rotation)
        {
            ref.current.rotation.x += delta 
            ref.current.rotation.y += delta * 3
            ref.current.position.z = Math.sin(state?.clock?.elapsedTime * 2)
        }
    })
    return (
        <mesh position={position} ref={ref} >
                <boxGeometry args={[size[0], size[1], size[2]]} />
                <meshStandardMaterial  color={color} />
        </mesh>
    )
}