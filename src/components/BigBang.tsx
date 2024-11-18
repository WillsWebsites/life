import { Points } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const BigBang = ({ onComplete }: { onComplete: () => void }) => {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 10_000
  const positions = new Float32Array(particleCount * 3).fill(0)
  const directions = new Float32Array(particleCount * 3)
  const speeds = new Float32Array(particleCount).map(() => Math.random() * 0.02 + 0.005)
  const sizes = new Float32Array(particleCount).map(() => 0.03)

  for (let i = 0; i < particleCount; i++) {
    const direction = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize()

    directions[i * 3] = direction.x
    directions[i * 3 + 1] = direction.y
    directions[i * 3 + 2] = direction.z
  }

  const delay = 0
  const startTime = useRef(Date.now())

  useEffect(() => {
    const animate = () => {
      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array
        const elapsedTime = Date.now() - startTime.current

        if (elapsedTime >= 9000) return onComplete()

        for (let i = 0; i < positions.length; i += 3) {
          if (elapsedTime > delay) {
            positions[i] += directions[i] * speeds[i / 3]
            positions[i + 1] += directions[i + 1] * speeds[i / 3]
            positions[i + 2] += directions[i + 2] * speeds[i / 3]
          }
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <div className="w-full h-full animate-fade-out-7">
      <Canvas
        camera={{
          near: 0.01,
          far: 10000,
          position: [0, 0, -7],
        }}
      >
        <Points
          ref={particlesRef}
          positions={positions}
          stride={3}
          sizes={sizes}
          material={new THREE.PointsMaterial({ sizeAttenuation: true, size: sizes[0] })}
        />
      </Canvas>
    </div>
  )
}

export default BigBang
