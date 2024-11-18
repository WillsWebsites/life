import { useState } from 'react'
import BigBang from './components/BigBang'
import { initialGameState } from './lib/initialGameState'
import Earth from './stages/Earth'
import Fate from './stages/Fate'
import Intro from './stages/Intro'
import Singularity from './stages/Singularity'

function App() {
  const [introComplete, setIntroComplete] = useState(initialGameState.introComplete)
  const [singularityComplete, setSingularityComplete] = useState(initialGameState.singularityComplete)
  const [bigBangComplete, setBigBangComplete] = useState(initialGameState.bigBangComplete)
  const [fateComplete, setFateComplete] = useState(initialGameState.fateComplete)

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}
      {introComplete && !singularityComplete && <Singularity onComplete={() => setSingularityComplete(true)} />}
      {singularityComplete && !bigBangComplete && <BigBang onComplete={() => setBigBangComplete(true)} />}
      {bigBangComplete && !fateComplete && <Fate onComplete={() => setFateComplete(true)} />}
      {fateComplete && <Earth />}
    </div>
  )
}

export default App
