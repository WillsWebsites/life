import { Button } from '@/components/ui/button'
import { useSettings } from '@/hooks/useSettings'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

const Intro = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeout, setFadeout] = useState(false)
  const [showCreateLight, setShowCreateLight] = useState(false)
  const [createLight, setCreateLight] = useState(false)

  const handleAudioPlay = useSettings((state) => state.handleAudioPlay)

  const handleCreateLight = () => {
    setCreateLight(true)
    handleAudioPlay()
    setTimeout(() => {
      onComplete()
    }, 2000)
  }

  return (
    <div>
      {!showCreateLight && (
        <div className={cn('transition-opacity duration-1000', fadeout ? 'opacity-0' : 'opacity-100')}>
          <TypeAnimation
            sequence={[
              2500,
              'In the beginning',
              1500,
              'There was nothing',
              500,
              'There was nothing, only darkness',
              1500,
              'Then...',
              1500,
              'There was light',
              2000,
              () => {
                setFadeout(true)
              },
              1100,
              () => {
                setShowCreateLight(true)
              },
            ]}
            wrapper="span"
            speed={40}
            style={{
              fontSize: '2em',
              display: 'inline-block',
            }}
            omitDeletionAnimation
          />
        </div>
      )}

      {showCreateLight && (
        <Button
          variant="outline"
          onClick={handleCreateLight}
          className={cn('transition-all animate-fade-in-1 opacity-0', createLight && '!animate-fade-out-0')}
        >
          Create light
        </Button>
      )}
    </div>
  )
}

export default Intro
