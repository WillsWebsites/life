import { useSettings } from '@/hooks/useSettings'
import { Volume2, VolumeX } from 'lucide-react'

const AudioControls = () => {
  const isPlaying = useSettings((state) => state.isPlaying)
  const handleAudioPlay = useSettings((state) => state.handleAudioPlay)

  return <button onClick={handleAudioPlay}>{!isPlaying ? <Volume2 /> : <VolumeX />}</button>
}

export default AudioControls
