'use client'
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh, Vector3 } from "three"

export default function Torus({position, size, color}: {position: Vector3, size: number[], color: string}) {
    const ref = useRef<Mesh | null>(null)
    useFrame((state, delta) => {
        if(ref.current && ref.current.rotation) {
            ref.current.rotation.x += delta 
            ref.current.rotation.y += delta * 3
            ref.current.position.z = Math.sin(state?.clock?.elapsedTime * 2)
        }
    })
    return (
        <mesh position={position} ref={ref}>
            <torusGeometry args={[size[0], size[1], size[2], size[3], size[4]]} />
            <meshStandardMaterial color={color} wireframe />
        </mesh>
    )
}