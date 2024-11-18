import { useMotherNature } from '@/hooks/useMotherNature'
import { cn } from '@/lib/utils'
import { Leaf } from 'lucide-react'
import MotherNatureDescription from './MotherNatureDescription'
import MotherNatureIntro from './MotherNatureIntro'
import Shop from './Shop'
import { Button } from './ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from './ui/drawer'

const MotherNature = () => {
  const cellCount = useMotherNature((state) => state.cellCount)
  const hasOpened = useMotherNature((state) => state.hasOpened)
  const updateIsOpen = useMotherNature((state) => state.updateIsOpen)

  if (cellCount < 100 && !hasOpened) return null

  return (
    <Drawer onOpenChange={(value) => updateIsOpen(value)}>
      <DrawerTrigger asChild>
        <button>
          <Leaf className={cn('transition-transform', !hasOpened && 'animate-rainbow')} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="min-h-[250px]">
        <MotherNatureDescription />
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
