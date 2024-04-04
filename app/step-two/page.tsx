'use client'
import { Canvas } from "@react-three/fiber";
import Sphere from "./_components/Shpere";
import { Vector3 } from "three";

export default function ProjectTwo() {
    return (
        <Canvas className="h-full">
            <directionalLight position={[0, 0, 2]} intensity={.5}/>
            <ambientLight intensity={.1}/>
            <Sphere color="red" position={new Vector3(0, 0, 0)} size={[1, 30, 30]}/>
        </Canvas>
    )
}