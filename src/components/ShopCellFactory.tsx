import { useMotherNature } from '@/hooks/useMotherNature'
import { ICellFactory } from '@/types/cellFactory'
import { Button } from './ui/button'

type Props =
  | {
      variant?: 'initial'
    }
  | {
      variant?: 'default'
      factory: ICellFactory
    }

const ShopCellFactory = ({ variant = 'default', ...props }: Props) => {
  const globalCellCount = useMotherNature((state) => state.cellCount)
  const purchaseCellFactory = useMotherNature((state) => state.purchaseCellFactory)

  return (
    <div
      key={variant === 'default' && 'factory' in props ? props.factory.id : 'initial'}
      className="flex flex-col items-center justify-center px-6 py-4 rounded-md bg-gray-800/80 min-w-[100px] min-h-[100px] border-gray-200/60 border-[1px]"
    >
      {variant === 'initial' && (
        <div className="text-left flex flex-col gap-2">
          <span>
            Cells: <span className="font-orbitron font-bold">{globalCellCount}</span>
          </span>
          <span>
            Requirement: <span className="font-orbitron font-bold">100</span>
          </span>
          {globalCellCount >= 100 && (
            <Button
              className="bg-white text-black hover:bg-white/80 hover:text-black text-xs px-2 py-0 h-8 mt-2"
              onClick={purchaseCellFactory}
              disabled={globalCellCount < 100}
            >
              Create
            </Button>
          )}
        </div>
      )}

      {variant === 'default' && 'factory' in props && (
        <>
          <span>Level: {props.factory.level}</span>
          <span>Capacity: {props.factory.maxCells}</span>
          <span>Cells: {props.factory.cells}</span>
        </>
      )}
    </div>
  )
}

export default ShopCellFactory
