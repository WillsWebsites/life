import { useMotherNature } from '@/hooks/useMotherNature'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

const MotherNatureIntro = () => {
  const [fadeout, setFadeout] = useState(false)

  const updateHasOpened = useMotherNature((state) => state.updateHasOpened)

  return (
    <div
      className={cn(
        'transition-opacity duration-1000 flex w-full justify-center mt-12',
        fadeout ? 'opacity-0' : 'opacity-100',
      )}
    >
      <TypeAnimation
        sequence={[
          1000,
          'I',
          500,
          'I am Mother Nature',
          1000,
          'I am the creator of life',
          1000,
          'I am the keeper of the balance',
          1000,
          'This is where change begins',
          1000,
          'Shape the world,',
          500,
          'Shape the world, and change its nature',
          1000,
          () => {
            setFadeout(true)
          },
          1000,
          () => {
            updateHasOpened(true)
          },
        ]}
        wrapper="span"
        speed={40}
        style={{
          fontSize: '1.4em',
          display: 'inline-block',
          textAlign: 'center',
        }}
        omitDeletionAnimation
      />
    </div>
  )
}

export default MotherNatureIntro
