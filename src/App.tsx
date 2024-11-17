import { useRef, useState } from 'react'
import { creationAudioSRC } from './assets/audio'
import AudioControls from './components/audio/AudioControls'
import BigBang from './components/BigBang'
import Earth from './stages/Earth'
import Fate from './stages/Fate'
import Intro from './stages/Intro'
import Singularity from './stages/Singularity'

function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const [singularityComplete, setSingularityComplete] = useState(false)
  const [bigBangComplete, setBigBangComplete] = useState(false)
  const [fateComplete, setFateComplete] = useState(false)
  const [isAudioPaused, setIsAudioPaused] = useState(true)

  const audio = useRef<HTMLAudioElement>(new Audio(creationAudioSRC))
  audio.current.loop = true
  audio.current.volume = 0.1

  const handlePlayAudio = () => {
    if (isAudioPaused) {
      audio.current.play()
    } else {
      audio.current.pause()
    }
    setIsAudioPaused(!isAudioPaused)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      {!introComplete && <Intro onComplete={() => setIntroComplete(true)} onPlayAudio={handlePlayAudio} />}
      {introComplete && !singularityComplete && <Singularity onComplete={() => setSingularityComplete(true)} />}
      {singularityComplete && !bigBangComplete && <BigBang onComplete={() => setBigBangComplete(true)} />}
      {bigBangComplete && !fateComplete && <Fate onComplete={() => setFateComplete(true)} />}
      {fateComplete && <Earth />}
      {introComplete && <AudioControls onPlayAudio={handlePlayAudio} isPaused={!isAudioPaused} />}
    </div>
  )
}

export default App
