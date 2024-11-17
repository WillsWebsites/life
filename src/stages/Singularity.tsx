import TopBar from '@/components/TopBar'
import { Stages } from '@/types/stages'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import SingularityClicker from './SingularityClicker'

const Singularity = ({ onComplete }: { onComplete: () => void }) => {
  const [energyPercentage, setEnergyPercentage] = useState(0.01)
  const [showInfinity, setShowInfinity] = useState(false)

  return (
    <div className="w-full h-full animate-fade-in-3 relative">
      <TopBar stage={Stages.SINGULARITY}>
        <p className="text-white text-sm flex items-center gap-2">
          <span>Energy: </span>
          <span className="min-w-[55px]">{showInfinity ? '∞' : `${energyPercentage.toFixed(2)}%`}</span>
        </p>
      </TopBar>
      <Canvas
        camera={{
          near: 0.01,
          far: 10000,
        }}
      >
        <SingularityClicker
          onComplete={onComplete}
          setEnergyPercentage={setEnergyPercentage}
          setShowInfinity={setShowInfinity}
        />
      </Canvas>
    </div>
  )
}

export default Singularity
