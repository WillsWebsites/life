import { create } from 'zustand'

type MotherNatureState = {
  hasOpened: boolean
  cellCount: number
  cellFactoryCount: number
}

type MotherNatureActions = {
  updateHasOpened: () => void
  updateCellCount: (newCount: number) => void
  updateCellFactoryCount: () => void
}

export const useMotherNature = create<MotherNatureState & MotherNatureActions>((set) => ({
  hasOpened: false,
  cellCount: 100,
  cellFactoryCount: 0,
  updateHasOpened: () => set((state) => ({ hasOpened: !state.hasOpened })),
  updateCellCount: (newCount: number) => set(() => ({ cellCount: newCount })),
  updateCellFactoryCount: () => set((state) => ({ cellFactoryCount: state.cellFactoryCount + 1 })),
}))
