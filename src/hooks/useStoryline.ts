import { initialGameState } from '@/lib/initialGameState'
import { StorylineActions, StorylineState } from '@/types/storyline'
import { create } from 'zustand'

export const useStoryline = create<StorylineState & StorylineActions>((set) => ({
  introComplete: initialGameState.introComplete,
  singularityComplete: initialGameState.singularityComplete,
  bigBangComplete: initialGameState.bigBangComplete,
  fateComplete: initialGameState.fateComplete,
  updateIntroComplete: (value: boolean) => set(() => ({ introComplete: value })),
  updateSingularityComplete: (value: boolean) => set(() => ({ singularityComplete: value })),
  updateBigBangComplete: (value: boolean) => set(() => ({ bigBangComplete: value })),
  updateFateComplete: (value: boolean) => set(() => ({ fateComplete: value })),
}))
