'use client'
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import { Mesh, Vector3 } from "three"

export default function Sphere({position, color, size}: {position: Vector3, color: string, size: number[]}) {
    const [isHover, setIsHover] = useState(false)
    const [isClick, setIsClicked] = useState(false)

    const ref = useRef<Mesh | null>(null)
    useFrame((state, delta) => {
        if(ref.current && ref.current.rotation) {
            const speed = isClick ? 2 : 1
            ref.current.rotation.y += delta * speed
        }
    })
    return (
        <mesh position={position} ref={ref} 
            onPointerEnter={(e) => {e.stopPropagation(); setIsHover(true)}} 
            onPointerLeave={(e) =>{ e.stopPropagation(); setIsHover(false)}} 
            onClick={(e) => {e.stopPropagation(); setIsClicked(!isClick)}}
            scale={isClick ? [1.5, 1.5, 1.5] : [1, 1, 1]}>
                <sphereGeometry />
                <meshStandardMaterial  color={isHover? "#ca8a04":"#eab308"} wireframe />
        </mesh>
    )
}