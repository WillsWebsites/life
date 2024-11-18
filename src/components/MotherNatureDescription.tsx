import { useMotherNature } from '@/hooks/useMotherNature'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import { DrawerDescription, DrawerTitle } from './ui/drawer'

const messages = [
  'Even the smallest change can cause a ripple in the universe',
  'The winds whisper secrets of the past',
  'Every leaf tells a story of resilience',
  'In the shadows, the truth awaits',
  'Nature speaks in colors unseen',
  'The stars hold the answers to your questions',
  'Time flows like a river, carrying memories',
  'Every drop of rain is a promise of renewal',
  'The earth breathes life into the forgotten',
  'In silence, the universe reveals its wonders',
]

const MotherNatureDescription = () => {
  const hasOpened = useMotherNature((state) => state.hasOpened)
  const randomMessage = messages[Math.floor(Math.random() * messages.length)]

  useEffect(() => {
    console.log('here')
  }, [])

  return (
    <div
      className={cn(
        'text-white flex flex-col absolute top-2 left-2',
        !hasOpened && 'opacity-0 pointer-events-none',
        hasOpened && 'animate-fade-in-1',
      )}
    >
      <DrawerTitle className="text-base font-orbitron">Mother Nature</DrawerTitle>
      <DrawerDescription className="text-base text-white">{randomMessage}</DrawerDescription>
    </div>
  )
}

export default MotherNatureDescription
