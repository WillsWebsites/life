import { creationAudioSRC } from '@/assets/audio'
import { create } from 'zustand'

type SettingsState = {
  audio: HTMLAudioElement
  isPlaying: boolean
  audioVolume: number
}

type SettingsActions = {
  updateIsAudioPaused: (newIsAudioPaused: boolean) => void
  handleAudioPlay: () => void
}

export const useSettings = create<SettingsState & SettingsActions>((set) => ({
  audio: new Audio(creationAudioSRC),
  isPlaying: true,
  audioVolume: 0.1,
  updateIsAudioPaused: (newIsAudioPaused: boolean) => {
    set((state) => {
      if (state.isPlaying) {
        state.audio.play()
      } else {
        state.audio.pause()
      }
      return { isPlaying: newIsAudioPaused }
    })
  },
  handleAudioPlay: () => {
    set((state) => {
      if (state.isPlaying) {
        state.audio.play()
      } else {
        state.audio.pause()
      }
      return { isPlaying: !state.isPlaying }
    })
  },
}))
