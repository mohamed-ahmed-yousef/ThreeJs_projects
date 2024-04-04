'use client'

import { Vector3 } from "three";
import { Canvas } from "@react-three/fiber";
import Shpere from "./_components/Sphere";
import Torus from "./_components/Torus";
import TorusKnot from "./_components/TorusKnot";

export default function ProjectOne() {
    return (
        <Canvas className="h-full">
            <directionalLight position={[0, 0, 2]} intensity={.5}/>
            <ambientLight intensity={.1}/>
            {/* <pointLight  position={[10, 10, 10]} /> */}
            <Shpere position={new Vector3(0, 0, 9)} color="red" size={[1, 1, 1]}/>
        </Canvas>
    )
}