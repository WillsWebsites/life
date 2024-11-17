import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import SingularityClicker from './SingularityClicker'

const Singularity = ({ onComplete }: { onComplete: () => void }) => {
  const [potentialEnergy, setPotentialEnergy] = useState(0.01)
  const [showInfinity, setShowInfinity] = useState(false)

  return (
    <div className="w-full h-full animate-fade-in-3 relative">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex justify-between w-[calc(100%-3rem)] items-center select-none">
        <h2 className="text-white text-2xl font-bold">01. The Singularity</h2>
        <p className="text-white text-sm flex items-center gap-2">
          <span>Potential Energy: </span>
          <span className="min-w-[55px]">{showInfinity ? '∞' : `${potentialEnergy.toFixed(2)}%`}</span>
        </p>
      </div>
      <Canvas
        camera={{
          near: 0.01,
          far: 10000,
        }}
      >
        <SingularityClicker
          onComplete={onComplete}
          setPotentialEnergy={setPotentialEnergy}
          setShowInfinity={setShowInfinity}
        />
      </Canvas>
    </div>
  )
}

export default Singularity
