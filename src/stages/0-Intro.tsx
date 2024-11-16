import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

const Intro = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeout, setFadeout] = useState(false)
  const [showCreateLife, setShowCreateLife] = useState(false)
  const [createLife, setCreateLife] = useState(false)

  const handleCreateLife = () => {
    setCreateLife(true)
    setTimeout(() => {
      onComplete()
    }, 1000)
  }

  return (
    <div>
      {!showCreateLife && (
        <div className={cn('transition-opacity duration-1000', fadeout ? 'opacity-0' : 'opacity-100')}>
          <TypeAnimation
            sequence={[
              3000,
              'In the beginning',
              1500,
              'There was nothing',
              500,
              'There was nothing, only darkness',
              1500,
              'and then...',
              1500,
              'There was light',
              2000,
              () => {
                setFadeout(true)
              },
              1100,
              () => {
                setShowCreateLife(true)
              },
            ]}
            wrapper="span"
            speed={20}
            style={{
              fontSize: '2em',
              display: 'inline-block',
            }}
            omitDeletionAnimation
          />
        </div>
      )}

      {showCreateLife && (
        <Button
          variant="outline"
          onClick={handleCreateLife}
          className={cn(
            'transition-all animate-fadeIn opacity-0',
            createLife && 'h-0 overflow-hidden text-[0px] p-0 border-none delay-200 duration-1000',
          )}
        >
          Create life
        </Button>
      )}
    </div>
  )
}

export default Intro
