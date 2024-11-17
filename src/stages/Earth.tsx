import StageLayout from '@/components/layouts/StageLayout'
import TopBar from '@/components/TopBar'
import { cn, generateRandomId } from '@/lib/utils'
import { Stages } from '@/types/stages'
import { useEffect, useState } from 'react'

const defaultCell = { id: generateRandomId(), x: window.innerWidth / 2, y: window.innerHeight / 2 }

const Earth = () => {
  const [cells, setCells] = useState([defaultCell])
  const [cellCount, setCellCount] = useState(1)

  const handleCellClick = (id: string) => {
    const intensity = 2
    const randomX = Math.floor(Math.random() * 100 * intensity) - 50 * intensity
    const randomY = Math.floor(Math.random() * 100 * intensity) - 50 * intensity

    setCells((prevCells) => {
      const newId = generateRandomId()
      const newCell = {
        id: newId,
        x: (prevCells.find((cell) => cell.id === id)?.x || defaultCell.x) + randomX,
        y: (prevCells.find((cell) => cell.id === id)?.y || defaultCell.y) + randomY,
      }

      const updatedCells = [...prevCells, newCell]

      setTimeout(() => {
        setCells((prevCells) => {
          return prevCells.filter((cell) => {
            return cell.id !== newId || cell.id === defaultCell.id
          })
        })
      }, 2000)

      return updatedCells
    })

    setCellCount((prev) => prev + 1)
  }

  useEffect(() => {
    const handleResize = () => {
      setCells((prevCells) => {
        return prevCells.map((cell) => ({
          ...cell,
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        }))
      })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <StageLayout className="bg-gradient-to-br from-slate-700 to-slate-900">
      <TopBar stage={Stages.EARTH}>{cellCount}</TopBar>
      {cells.map((cell) => (
        <button
          key={cell.id}
          className={cn(
            'bg-gradient-to-r from-red-300 to-red-500 rounded-full w-16 h-16 shadow-lg text-white text-2xl hover:scale-110 transition-transform active:scale-125',
            cell.id !== defaultCell.id && 'animate-fade-out-1',
          )}
          onClick={() => {
            handleCellClick(cell.id)
          }}
          style={{ position: 'absolute', left: `${cell.x}px`, top: `${cell.y}px` }}
        />
      ))}
    </StageLayout>
  )
}

export default Earth
