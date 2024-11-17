import { useMotherNature } from '@/hooks/useMotherNature'
import { Leaf } from 'lucide-react'

const MotherNature = () => {
  const cellCount = useMotherNature((state) => state.cellCount)

  if (cellCount < 100) return null

  return (
    <button>
      <Leaf className="animate-rainbow" />
    </button>
  )
}

export default MotherNature
