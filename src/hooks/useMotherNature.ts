import { initialGameState } from '@/lib/initialGameState'
import { generateRandomId } from '@/lib/utils'
import { ICellFactory } from '@/types/cellFactory'
import { MotherNatureActions, MotherNatureState } from '@/types/motherNature'
import { create } from 'zustand'

export const useMotherNature = create<MotherNatureState & MotherNatureActions>((set, get) => ({
  hasOpened: initialGameState.hasOpened,
  isOpen: false,
  cellCount: initialGameState.cellCount,
  cellFactories: initialGameState.cellFactories,
  updateHasOpened: (value: boolean) => set(() => ({ hasOpened: value })),
  updateIsOpen: (value: boolean) => set(() => ({ isOpen: value })),
  updateCellCount: (newCount: number) => set(() => ({ cellCount: newCount })),
  purchaseCellFactory: () => {
    const { cellCount, cellFactories } = get()
    if (cellCount < 100 || cellFactories.length >= 1) return

    set((state) => ({
      cellFactories: [
        ...state.cellFactories,
        { id: generateRandomId(), cells: 0, maxCells: 100, level: 1, multiplier: 1 },
      ],
    }))

    set((state) => ({
      cellCount: state.cellCount - 100,
    }))
  },
  updateCellFactory: (id: string, updates: Partial<ICellFactory>) =>
    set((state) => ({
      cellFactories: state.cellFactories.map((cf) => (cf.id === id ? { ...cf, ...updates } : cf)),
    })),
}))
