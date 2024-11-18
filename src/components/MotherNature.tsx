import { useMotherNature } from '@/hooks/useMotherNature'
import { cn } from '@/lib/utils'
import { Leaf } from 'lucide-react'
import MotherNatureIntro from './MotherNatureIntro'
import Shop from './Shop'
import { Button } from './ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from './ui/drawer'

const MotherNature = () => {
  const cellCount = useMotherNature((state) => state.cellCount)
  const hasOpened = useMotherNature((state) => state.hasOpened)

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

  const randomMessage = messages[Math.floor(Math.random() * messages.length)]

  if (cellCount < 100) return null

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>
          <Leaf className={cn('transition-transform', !hasOpened && 'animate-rainbow')} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="min-h-[250px]">
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
        <div className="absolute top-2 right-2">
          <DrawerClose asChild>
            <Button variant="outline">X</Button>
          </DrawerClose>
        </div>

        {!hasOpened ? <MotherNatureIntro /> : <Shop />}
      </DrawerContent>
    </Drawer>
  )
}

export default MotherNature
