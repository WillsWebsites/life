import { useState } from 'react'
import Intro from './stages/0-Intro'
import CreateLife from './stages/1-CreateLife'
import CellCreation from './stages/2-CellCreation'

function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const [createLifeComplete, setCreateLifeComplete] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}
      {introComplete && !createLifeComplete && <CreateLife onComplete={() => setCreateLifeComplete(true)} />}
      {createLifeComplete && <CellCreation />}
    </div>
  )
}

export default App
