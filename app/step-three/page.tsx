'use client'
import { Canvas } from "@react-three/fiber";
import TorusKnot from "./_components/TorusKnot";
import { Vector3 } from "three";

export default function StepThree(){
    return (
        <Canvas className="w-full">
            <TorusKnot />
        </Canvas>
    )
}