import { useState } from 'react'
import BigBang from './components/BigBang'
import { useStoryline } from './hooks/useStoryline'
import { initialGameState } from './lib/initialGameState'
import Earth from './stages/Earth'
import Fate from './stages/Fate'
import Intro from './stages/Intro'
import Singularity from './stages/Singularity'

function App() {
  const introComplete = useStoryline((state) => state.introComplete)
  const singularityComplete = useStoryline((state) => state.singularityComplete)
  const bigBangComplete = useStoryline((state) => state.bigBangComplete)
  const fateComplete = useStoryline((state) => state.fateComplete)

  const updateIntroComplete = useStoryline((state) => state.updateIntroComplete)
  const updateSingularityComplete = useStoryline((state) => state.updateSingularityComplete)
  const updateBigBangComplete = useStoryline((state) => state.updateBigBangComplete)
  const updateFateComplete = useStoryline((state) => state.updateFateComplete)

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      {!introComplete && <Intro onComplete={() => updateIntroComplete(true)} />}
      {introComplete && !singularityComplete && <Singularity onComplete={() => updateSingularityComplete(true)} />}
      {singularityComplete && !bigBangComplete && <BigBang onComplete={() => updateBigBangComplete(true)} />}
      {bigBangComplete && !fateComplete && <Fate onComplete={() => updateFateComplete(true)} />}
      {fateComplete && <Earth />}
    </div>
  )
}

export default App
