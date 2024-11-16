import { Canvas } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Mesh } from 'three'

const CellCreation = () => {
  const buttonRef = useRef<Mesh>(null)
  const [color, setColor] = useState('orange')
  const [scale, setScale] = useState(1)

  const handleButtonClick = () => {
    setScale((scale) => scale + 0.1)
  }

  return (
    <div className="w-full h-full">
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
            setColor('red')
            document.body.style.cursor = 'pointer'
          }}
          onPointerOut={() => {
            setColor('orange')
            document.body.style.cursor = 'auto'
          }}
        >
          <sphereGeometry />
          <meshStandardMaterial color={color} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default CellCreation
