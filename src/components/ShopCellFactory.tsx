import { useMotherNature } from '@/hooks/useMotherNature'
import { ICellFactory } from '@/types/cellFactory'
import { Wrench } from 'lucide-react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

type Props =
  | {
      variant?: 'initial'
    }
  | {
      variant?: 'default'
      factory: ICellFactory
    }

const ShopCellFactory = ({ variant = 'default', ...props }: Props) => {
  const isDefault = variant === 'default' && 'factory' in props
  const globalCellCount = useMotherNature((state) => state.cellCount)
  const purchaseCellFactory = useMotherNature((state) => state.purchaseCellFactory)

  return (
    <div
      key={variant === 'default' && 'factory' in props ? props.factory.id : 'initial'}
      className="flex flex-col items-start justify-start px-2 py-4 rounded-md bg-gray-800/80 min-w-[100px] min-h-[100px] border-gray-200/60 border-[1px] relative"
    >
      {variant === 'initial' && (
        <>
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
        </>
      )}

      {isDefault && (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="absolute top-[1px] right-[1px] p-2 h-6 hover:bg-slate-400/20 hover:text-white rounded-sm"
              >
                <Wrench />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuItem
                onClick={() => {
                  console.log('upgrade')
                }}
                className="cursor-pointer flex justify-between items-center"
                disabled={globalCellCount < 500}
              >
                <span>Upgrade</span>
                <span className="text-xs text-gray-400">500</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <span>
            Level: <span className="font-orbitron font-bold">{props.factory.level}</span>
          </span>
          <span>
            Capacity: <span className="font-orbitron font-bold">{props.factory.maxCells}</span>
          </span>
          <span>
            Cells: <span className="font-orbitron font-bold">{props.factory.cells}</span>
          </span>
        </>
      )}
    </div>
  )
}

export default ShopCellFactory
