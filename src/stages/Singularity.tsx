import TopBar from '@/components/TopBar/TopBar'
import TopBarItem from '@/components/TopBar/TopBarItem'
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
        <TopBarItem value={showInfinity ? '∞' : `${energyPercentage.toFixed(2)}%`} name="Energy" />
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
