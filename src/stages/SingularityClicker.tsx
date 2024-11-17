import { sleep } from '@/lib/utils'
import { useFrame } from '@react-three/fiber'
import { EffectComposer, Glitch } from '@react-three/postprocessing'
import { GlitchMode } from 'postprocessing'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { Mesh, Vector2 } from 'three'

const SingularityClicker = ({
  onComplete,
  setEnergyPercentage,
  setShowInfinity,
}: {
  onComplete: () => void
  setEnergyPercentage: Dispatch<SetStateAction<number>>
  setShowInfinity: Dispatch<SetStateAction<boolean>>
}) => {
  const buttonRef = useRef<Mesh>(null)
  const [scale, setScale] = useState(7.1)
  const [complete, setComplete] = useState(false)
  const [isScalingDown, setIsScalingDown] = useState(false)
  const [canGlitch, setCanGlitch] = useState(true)
  const [glitchStrength, setGlitchStrength] = useState(new Vector2(0.2, 0.4))

  const handleButtonClick = () => {
    if (complete) return
    setScale((prevScale) => prevScale + 0.1)
  }

  useFrame(() => {
    const energyPercentage = Math.min(100, Math.max(0.01, ((scale - 0.2) / (7 - 0.2)) * 100))
    setEnergyPercentage(energyPercentage)

    const startScaleDown = async () => {
      if (isScalingDown) return
      setIsScalingDown(true)
      await sleep(1300)

      setShowInfinity(true)

      const duration = 700
      const startTime = performance.now()
      const initialScale = scale

      const animateScaleDown = async (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        const easedProgress = Math.pow(progress, 3)
        const newScale = initialScale * Math.max(0.005, 1 - easedProgress)

        setScale(newScale)

        if (progress < 1) {
          requestAnimationFrame(animateScaleDown)
        } else {
          setCanGlitch(false)
          await sleep(1000)
          onComplete()
        }
      }

      requestAnimationFrame(animateScaleDown)
    }

    setScale((prevScale) => {
      if (prevScale >= 7.1) {
        setComplete(true)
        document.body.style.cursor = 'auto'
        startScaleDown()
        return prevScale
      } else if (prevScale >= 5) {
        return prevScale - prevScale * 0.0007
      } else if (prevScale >= 0.2) {
        return prevScale - prevScale * 0.0011
      } else {
        return prevScale
      }
    })

    if (complete && canGlitch) {
      const pulseSpeed = Math.PI
      const pulseAmount = 0.1
      const time = performance.now() * 0.001
      const strengthX = 0.2 + Math.sin(time * pulseSpeed) * pulseAmount
      const strengthY = 0.4 + Math.sin(time * pulseSpeed) * pulseAmount
      setGlitchStrength(new Vector2(strengthX, strengthY))
    }
  })

  return (
    <EffectComposer>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-3, -3, 2]} intensity={1} />

      <mesh
        ref={buttonRef}
        position={[0, 0, -5]}
        scale={scale}
        onClick={handleButtonClick}
        onPointerOver={() => {
          if (!complete) {
            document.body.style.cursor = 'pointer'
          }
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto'
        }}
      >
        <sphereGeometry />
        {canGlitch && <meshNormalMaterial opacity={0.1} />}
        {!canGlitch && <meshBasicMaterial color="white" />}
      </mesh>

      <>
        {complete && canGlitch && (
          <Glitch duration={new Vector2(0.1, 0.3)} strength={glitchStrength} mode={GlitchMode.CONSTANT_MILD} />
        )}
      </>
    </EffectComposer>
  )
}

export default SingularityClicker
