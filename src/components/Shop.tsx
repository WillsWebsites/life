import { useMotherNature } from '@/hooks/useMotherNature'
import { Factory } from 'lucide-react'
import ShopCellFactory from './ShopCellFactory'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

const Shop = () => {
  const cellFactories = useMotherNature((state) => state.cellFactories)

  return (
    <div className="animate-fade-in-1 mt-12 flex w-full px-4">
      <>
        <Popover>
          <PopoverTrigger className="flex flex-col bg-slate-400/20 p-4 rounded-lg text-center items-center border-slate-200/40 border-[1px] hover:bg-slate-400/25 transition-all">
            <>
              <div className="flex justify-between items-end mb-2 w-full">
                <Factory />
                <span>{cellFactories.length}</span>
              </div>
              <span>Cell Factories</span>
            </>
          </PopoverTrigger>
          <PopoverContent className="min-w-[400px]">
            <h3 className="text-lg font-bold font-orbitron">Cell Factories</h3>
            <p>
              Cell Factories produce new cells, essential for sustaining life and maintaining balance in nature.
            </p>
            <div className="flex gap-2 pt-4">
              {cellFactories.length === 0 && <ShopCellFactory variant="initial" />}
              {cellFactories.map((factory) => (
                <ShopCellFactory key={factory.id} factory={factory} />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* {confirmPurchase && (
          <div className="flex flex-col bg-slate-400/20 p-4 rounded-lg text-center items-center border-slate-200/40 border-[1px] hover:bg-slate-400/25 transition-all">
            <span>Requirement:</span>
            <span>100 Cells</span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="text-white hover:bg-slate-400/20 hover:text-white text-xs px-2 py-0 h-8"
                onClick={() => setConfirmPurchase(false)}
              >
                <X />
              </Button>
              <Button
                className="bg-white text-black hover:bg-white/80 hover:text-black text-xs px-2 py-0 h-8"
                onClick={confirmPurchaseHandler}
                disabled={cellFactories.length >= 1 || cellCount < 100}
              >
                <Check />
              </Button>
            </div>
          </div>
        )} */}
      </>
    </div>
  )
}

export default Shop
