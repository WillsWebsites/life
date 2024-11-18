import { cn } from '@/lib/utils'
import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

const Fate = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeout, setFadeout] = useState(false)

  return (
    <div className={cn('transition-opacity duration-1000', fadeout ? 'opacity-0' : 'opacity-100')}>
      <TypeAnimation
        sequence={[
          2500,
          'Every once in a while,',
          1000,
          'Every once in a while, fate extends a hand',
          500,
          'Every once in a while, fate extends a hand into the darkness of the cosmos',
          1500,
          'Sometimes,',
          1000,
          'Sometimes, all it takes',
          500,
          'Sometimes, all it takes is a single cell',
          1500,
          () => {
            setFadeout(true)
          },
          1100,
          () => {
            onComplete()
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
  )
}

export default Fate
