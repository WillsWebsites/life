import { useMotherNature } from '@/hooks/useMotherNature'
import { ICellFactory } from '@/types/cellFactory'
import { Factory } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

interface Props {
  cf: ICellFactory
}

const CellFactory = ({ cf }: Props) => {
  const globalCellCount = useMotherNature((state) => state.cellCount)
  const updateGlobalCellCount = useMotherNature((state) => state.updateCellCount)
  const updateCellFactory = useMotherNature((state) => state.updateCellFactory)
  const [cellCount, setCellCount] = useState(cf.cells)

  const collectCellsHandler = () => {
    if (cellCount < 1) return
    updateCellFactory(cf.id, 0)
    updateGlobalCellCount(globalCellCount + cellCount)
    setCellCount(0)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (cellCount >= cf.maxCells) return

      setCellCount((prevCount) => {
        updateCellFactory(cf.id, prevCount + 1)
        return prevCount + 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [cellCount])

  return (
    <button
      className="p-4 bg-slate-500/20 rounded-sm text-center flex flex-col items-center justify-center min-w-[150px] border-slate-200/40 border-[1px] hover:bg-slate-400/25 transition-all"
      onClick={collectCellsHandler}
      disabled={cellCount < 1}
    >
      <Factory className="mb-2" />
      <div className="rounded-sm h-2 w-full bg-slate-400 overflow-hidden">
        <div className="h-full bg-white text-xs" style={{ width: `${(cellCount / cf.maxCells) * 100}%` }} />
      </div>
      <p className="font-orbitron">
        {cellCount} / {cf.maxCells}
      </p>
    </button>
  )
}

export default CellFactory
