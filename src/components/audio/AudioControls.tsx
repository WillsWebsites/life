import { Volume2, VolumeX } from 'lucide-react'

const AudioControls = ({ onPlayAudio, isPaused }: { onPlayAudio: () => void; isPaused: boolean }) => {
  return (
    <button onClick={onPlayAudio} className="absolute bottom-4 right-4">
      {isPaused ? <Volume2 /> : <VolumeX />}
    </button>
  )
}

export default AudioControls
