'use client'

import { Suspense, useState, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, PerspectiveCamera, Center } from '@react-three/drei'
import * as THREE from 'three'

interface ModelProps {
    modelPath: string
    onLoad?: () => void
}

function Model({ modelPath, onLoad }: ModelProps) {
    const { scene } = useGLTF(modelPath)

    const clonedScene = useMemo(() => {
        const clone = scene.clone()
        clone.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.frustumCulled = true
                if (child.material) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach((mat) => {
                            mat.metalness = Math.min(mat.metalness || 0, 0.5)
                            mat.roughness = Math.max(mat.roughness || 1, 0.5)
                            mat.needsUpdate = true
                        })
                    } else {
                        child.material.metalness = Math.min(child.material.metalness || 0, 0.5)
                        child.material.roughness = Math.max(child.material.roughness || 1, 0.5)
                        child.material.needsUpdate = true
                    }
                }
            }
        })
        // Notify parent that model is loaded
        if (onLoad) {
            setTimeout(onLoad, 100)
        }
        // Dispatch global event for page loader
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                window.dispatchEvent(new CustomEvent('model-loaded'))
            }, 100)
        }
        return clone
    }, [scene, onLoad])

    return (
        <Center>
            <primitive object={clonedScene} scale={3} />
        </Center>
    )
}

function Loader() {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#3b82f6" wireframe />
        </mesh>
    )
}

// Themed loading overlay that displays while 3D model loads
function LoadingOverlay() {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-20">
            <div className="flex flex-col items-center gap-4">
                {/* Spinning rings loader */}
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
                    <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-accent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
                    <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-secondary animate-spin" style={{ animationDuration: '1.5s' }}></div>
                </div>
                {/* Loading text */}
                <div className="text-center">
                    <p className="text-sm font-semibold text-primary animate-pulse" style={{ fontFamily: 'var(--font-orbitron)' }}>
                        Loading 3D Model
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Please wait...</p>
                </div>
            </div>
        </div>
    )
}

interface Robot3DModelProps {
    modelPath?: string
    className?: string
}

export default function Robot3DModel({
    modelPath = '/robot.glb',
    className = ''
}: Robot3DModelProps) {
    const [isInteracting, setIsInteracting] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    if (hasError) {
        return (
            <div className={`w-full h-full flex items-center justify-center ${className}`}>
                <div className="text-center text-muted-foreground">
                    <p>3D Model unavailable</p>
                </div>
            </div>
        )
    }

    return (
        <div className={`w-full h-full relative cursor-grab active:cursor-grabbing ${className}`} style={{ touchAction: 'none' }}>
            {/* Loading overlay */}
            {isLoading && <LoadingOverlay />}

            {!isInteracting && !isLoading && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                    <div className="bg-primary/80 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-xs font-medium animate-pulse">
                        🖱️ Drag to rotate
                    </div>
                </div>
            )}
            <Canvas
                style={{ cursor: 'grab' }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'default',
                    failIfMajorPerformanceCaveat: false
                }}
                dpr={[1, 1.5]}
                frameloop="demand"
                onCreated={({ gl }) => {
                    gl.setClearColor('#000000', 0)
                }}
                onError={() => setHasError(true)}
            >
                <PerspectiveCamera makeDefault position={[0, 0.5, 4]} fov={50} />

                {/* Simple reliable lighting */}
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <directionalLight position={[-5, 5, -5]} intensity={0.5} />
                <pointLight position={[0, 5, 0]} intensity={0.5} />

                <Suspense fallback={<Loader />}>
                    <Model modelPath={modelPath} onLoad={() => setIsLoading(false)} />
                </Suspense>

                <OrbitControls
                    enableZoom={true}
                    zoomToCursor={true}
                    minDistance={3}
                    maxDistance={8}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={1}
                    rotateSpeed={1.5}
                    enableDamping
                    dampingFactor={0.1}
                    makeDefault
                    onStart={() => setIsInteracting(true)}
                    onEnd={() => setIsInteracting(false)}
                />
            </Canvas>
        </div>
    )
}

if (typeof window !== 'undefined') {
    useGLTF.preload('/robot.glb')
}
