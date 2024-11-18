export type StorylineState = {
  introComplete: boolean
  singularityComplete: boolean
  bigBangComplete: boolean
  fateComplete: boolean
}

export type StorylineActions = {
  updateIntroComplete: (value: boolean) => void
  updateSingularityComplete: (value: boolean) => void
  updateBigBangComplete: (value: boolean) => void
  updateFateComplete: (value: boolean) => void
}
