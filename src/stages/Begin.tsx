import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const Begin = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeout, setFadeout] = useState(false)

  const handleBegin = () => {
    setFadeout(true)
    setTimeout(() => {
      onComplete()
    }, 1000)
  }
  return (
    <Button
      variant="outline"
      onClick={handleBegin}
      className={cn('transition-all animate-fade-in-1 opacity-0', fadeout && '!animate-fade-out-0')}
    >
      Begin
    </Button>
  )
}

export default Begin
