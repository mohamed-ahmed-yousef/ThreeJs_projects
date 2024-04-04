import { Vector3 } from "three";

export default function TorusKnot({position, size, color}: {position: Vector3, size: number[], color: string}) {
    return (
        <mesh position={position}>
            <torusKnotBufferGeometry args={[size[0], size[1], size[2]]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}