'use client'
import { MeshWobbleMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh, Vector3 } from "three"
import { useControls } from 'leva'
import { OrbitControls } from "@react-three/drei"


export default function TorusKnot() {
    const ref = useRef<Mesh | null>(null)
    const {lightColor, lightIntensity, radius} = useControls({
        lightColor: "white",
        lightIntensity: {
            value: 1,
            min: 0,
            max: 5,
            step: .1
        },
        radius: {
            value: 4,
            min: .1,
            max:20,
            step:.4,
        }
    })

    return (
        <>
        <directionalLight position={[10, 10, 10]} intensity={lightIntensity} />
        <ambientLight intensity={.3}/>
        <mesh  ref={ref} >
            <torusKnotGeometry args={[radius, 0.1, 1000, 50, 5]} />
            <MeshWobbleMaterial  speed={2} color={lightColor}/>
        </mesh>
        <OrbitControls  />

        </>
    )
}