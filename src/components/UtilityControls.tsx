import AudioControls from './audio/AudioControls'
import MotherNature from './MotherNature'

const UtilityControls = () => {
  return (
    <div className="absolute bottom-4 right-4 flex flex-col gap-2">
      <MotherNature />
      <AudioControls />
    </div>
  )
}

export default UtilityControls
