import StageLayout from '@/components/layouts/StageLayout'
import TopBar from '@/components/TopBar'
import { Stages } from '@/types/stages'

const Earth = () => {
  return (
    <StageLayout>
      <TopBar stage={Stages.EARTH}></TopBar>
      <button className="text-red-300">O</button>
    </StageLayout>
  )
}

export default Earth
