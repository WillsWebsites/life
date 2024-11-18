import { useMotherNature } from '@/hooks/useMotherNature'
import { Check, Factory, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const Shop = () => {
  const [confirmPurchase, setConfirmPurchase] = useState(false)

  const cellFactoryCount = useMotherNature((state) => state.cellFactoryCount)
  const purchaseCellFactory = useMotherNature((state) => state.purchaseCellFactory)

  const confirmPurchaseHandler = () => {
    purchaseCellFactory()
    setConfirmPurchase(false)
  }

  return (
    <div className="animate-fade-in-1 mt-12 flex w-full px-4">
      <>
        {!confirmPurchase && (
          <Tooltip>
            <TooltipTrigger
              onClick={() => setConfirmPurchase(true)}
              className="flex flex-col bg-slate-400/20 p-4 rounded-lg text-center items-center border-slate-200/40 border-[1px] hover:bg-slate-400/25 transition-all"
            >
              <>
                <div className="flex justify-center mb-2">
                  <Factory />
                </div>
                <span>{cellFactoryCount}</span>
                <span>Cell Factory</span>
              </>
            </TooltipTrigger>
            <TooltipContent className="max-w-[250px]">
              <p>
                The Cell Factory produces new cells, essential for sustaining life and maintaining balance in
                nature.
              </p>
            </TooltipContent>
          </Tooltip>
        )}

        {confirmPurchase && (
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
              >
                <Check />
              </Button>
            </div>
          </div>
        )}
      </>
    </div>
  )
}

export default Shop
