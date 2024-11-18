import { useSettings } from '@/hooks/useSettings'
import { useStoryline } from '@/hooks/useStoryline'
import { Volume2, VolumeX } from 'lucide-react'

const AudioControls = () => {
  const isPlaying = useSettings((state) => state.isPlaying)
  const handleAudioPlay = useSettings((state) => state.handleAudioPlay)
  const introComplete = useStoryline((state) => state.introComplete)

  if (!introComplete) return null

  return <button onClick={handleAudioPlay}>{!isPlaying ? <Volume2 /> : <VolumeX />}</button>
}

export default AudioControls
