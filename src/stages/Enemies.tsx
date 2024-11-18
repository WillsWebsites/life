import { cn, generateRandomId } from '@/lib/utils'
import { useEffect, useState } from 'react'

const Enemies = () => {
  const [enemies, setEnemies] = useState<{ id: string; x: number; y: number }[]>([])

  useEffect(() => {
    const spawnEnemy = () => {
      const side = Math.floor(Math.random() * 4)
      const newEnemy = {
        id: generateRandomId(),
        x:
          side === 0
            ? Math.random() * window.innerWidth
            : side === 1
              ? window.innerWidth
              : side === 2
                ? Math.random() * window.innerWidth
                : 0,
        y:
          side === 0
            ? 0
            : side === 1
              ? Math.random() * window.innerHeight
              : side === 2
                ? window.innerHeight
                : Math.random() * window.innerHeight,
      }
      setEnemies((prevEnemies) => [...prevEnemies, newEnemy])
    }

    const moveEnemies = () => {
      setEnemies((prevEnemies) => {
        return prevEnemies.map((enemy) => {
          const centerX = window.innerWidth / 2
          const centerY = window.innerHeight / 2
          const speed = 1
          const deltaX = centerX - enemy.x
          const deltaY = centerY - enemy.y
          const angle = Math.atan2(deltaY, deltaX)
          return {
            ...enemy,
            x: enemy.x + Math.cos(angle) * speed,
            y: enemy.y + Math.sin(angle) * speed,
          }
        })
      })
    }

    const enemyInterval = setInterval(spawnEnemy, 5000)
    const moveInterval = setInterval(moveEnemies, 100)

    return () => {
      clearInterval(enemyInterval)
      clearInterval(moveInterval)
    }
  }, [])

  return (
    <>
      {enemies.map((enemy) => (
        <button
          key={enemy.id}
          className={cn(
            'bg-gradient-to-r from-green-300 to-green-500 rounded-full w-16 h-16 shadow-lg text-white text-2xl hover:scale-110 transition-transform active:scale-125',
          )}
          style={{ position: 'absolute', left: `${enemy.x}px`, top: `${enemy.y}px` }}
        />
      ))}
    </>
  )
}

export default Enemies
