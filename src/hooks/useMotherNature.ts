import { create } from 'zustand'

type MotherNatureState = {
  hasOpened: boolean
  cellCount: number
  cellFactoryCount: number
}

type MotherNatureActions = {
  updateHasOpened: (value: boolean) => void
  updateCellCount: (newCount: number) => void
  purchaseCellFactory: () => void
}

export const useMotherNature = create<MotherNatureState & MotherNatureActions>((set) => ({
  hasOpened: false,
  cellCount: 0,
  cellFactoryCount: 0,
  updateHasOpened: (value: boolean) => set(() => ({ hasOpened: value })),
  updateCellCount: (newCount: number) => set(() => ({ cellCount: newCount })),
  purchaseCellFactory: () => set((state) => ({ cellFactoryCount: state.cellFactoryCount + 1 })),
}))
