import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const DisplayObjects = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF(modelURL);

    const logoTexture = useTexture(logoDecal);
    const fullTexture = useTexture(fullDecal);

    useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta))

    const stateString = JSON.stringify(snap);

    return (
        <group key={stateString}>
            <mesh
                castShadow
                geometry={nodes.shirt_baked.geometry} // This will need to be adjusted for each model.
                material={materials.lambert1}
                material-roughness={1}
                dispose={null}
            >
                {snap.isFullTexture && (
                    <Decal
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={1}
                        map={fullTexture}
                    />
                )}

                {snap.isLogoTexture && (
                    <Decal
                        position={[0, 0.04, 0.12]}
                        rotation={[0, 0, 0]}
                        scale={0.21}
                        map={logoTexture}
                        map-anisotropy={16}
                        depthTest={false}
                        depthWrite={true}
                    />
                )}
            </mesh>
        </group>
    )
}

export default DisplayObjects