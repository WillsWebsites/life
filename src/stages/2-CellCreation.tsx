import { Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Mesh } from 'three'

const CellCreation = () => {
  const buttonRef = useRef<Mesh>(null)
  const [color, setColor] = useState('orange')
  const [scale, setScale] = useState(1)

  const handleButtonClick = () => {
    setScale((prevScale) => {
      const newScale = prevScale + 0.1
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight

      // Assuming the sphere's radius is 1, adjust this based on your geometry
      const sphereDiameter = newScale * 2 // Diameter of the sphere
      const coversScreen = sphereDiameter >= Math.max(screenWidth, screenHeight)

      if (coversScreen) {
        console.log('The sphere covers the entire screen!')
      }

      return newScale
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prevScale) => {
        if (prevScale >= 1) return prevScale - 0.04
        return prevScale
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full animate-fadeIn">
      <Canvas
        camera={{
          near: 0.01,
          far: 10000,
        }}
      >
        <ambientLight />
        <pointLight position={[0, 0, 10]} />

        <mesh
          ref={buttonRef}
          position={[0, 0, -5]}
          scale={scale}
          onClick={handleButtonClick}
          onPointerOver={() => {
            document.body.style.cursor = 'pointer'
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'auto'
          }}
        >
          <sphereGeometry />
          <meshStandardMaterial color={color} />
        </mesh>

        <Text scale={0.2} position={[0, 2, 0]}>
          The Singularity
        </Text>
      </Canvas>
    </div>
  )
}

export default CellCreation
