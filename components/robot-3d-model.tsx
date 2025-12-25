'use client'

import { useRef, Suspense, useEffect, useState, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

interface ModelProps {
    modelPath: string
}

function Model({ modelPath }: ModelProps) {
    const { scene } = useGLTF(modelPath)

    // Memoize the cloned scene to prevent re-cloning on every render
    const clonedScene = useMemo(() => {
        const clone = scene.clone()
        // Optimize materials for performance
        clone.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.frustumCulled = true
                if (child.material) {
                    child.material.needsUpdate = false
                }
            }
        })
        return clone
    }, [scene])

    return <primitive object={clonedScene} scale={2} />
}

function Loader() {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#3b82f6" wireframe />
        </mesh>
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
    const [contextLost, setContextLost] = useState(false)
    const [isInteracting, setIsInteracting] = useState(false)
    const canvasRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleContextLost = (event: Event) => {
            event.preventDefault()
            console.warn('WebGL context lost. Attempting to restore...')
            setContextLost(true)
        }

        const handleContextRestored = () => {
            console.log('WebGL context restored.')
            setContextLost(false)
        }

        const canvas = canvasRef.current?.querySelector('canvas')
        if (canvas) {
            canvas.addEventListener('webglcontextlost', handleContextLost)
            canvas.addEventListener('webglcontextrestored', handleContextRestored)

            return () => {
                canvas.removeEventListener('webglcontextlost', handleContextLost)
                canvas.removeEventListener('webglcontextrestored', handleContextRestored)
            }
        }
    }, [])

    if (contextLost) {
        return (
            <div className={`w-full h-full flex items-center justify-center ${className}`}>
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Restoring 3D view...</p>
                </div>
            </div>
        )
    }

    return (
        <div ref={canvasRef} className={`w-full h-full relative cursor-grab active:cursor-grabbing ${className}`} style={{ touchAction: 'none' }}>
            {/* Interaction hint */}
            {!isInteracting && (
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
                    powerPreference: 'high-performance',
                    preserveDrawingBuffer: false
                }}
                dpr={[1, 2]}
                frameloop="always"
                onCreated={({ gl }) => {
                    gl.setClearColor('#000000', 0)
                }}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

                {/* Simplified Lighting for better performance */}
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <directionalLight position={[-5, -5, -5]} intensity={0.3} />

                {/* 3D Model */}
                <Suspense fallback={<Loader />}>
                    <Model modelPath={modelPath} />
                </Suspense>

                {/* Mouse-controlled rotation - Full control */}
                <OrbitControls
                    enableZoom={false}
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

// Preload the model (only if it exists)
if (typeof window !== 'undefined') {
    useGLTF.preload('/robot.glb')
}
