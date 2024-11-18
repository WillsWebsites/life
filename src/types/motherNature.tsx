import { ICellFactory } from './cellFactory'

export type MotherNatureState = {
  hasOpened: boolean
  isOpen: boolean
  cellCount: number
  cellFactories: ICellFactory[]
}

export type MotherNatureActions = {
  updateHasOpened: (value: boolean) => void
  updateIsOpen: (value: boolean) => void
  updateCellCount: (newCount: number) => void
  purchaseCellFactory: () => void
  updateCellFactory: (id: string, newCells: number) => void
}
