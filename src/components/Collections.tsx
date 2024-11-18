import { useMotherNature } from '@/hooks/useMotherNature'
import CellFactory from './CellFactory'

const Collections = () => {
  const cellFactories = useMotherNature((state) => state.cellFactories)

  return (
    <div className="absolute bottom-2 left-2">
      {cellFactories.map((cf) => (
        <CellFactory key={cf.id} cf={cf} />
      ))}
    </div>
  )
}

export default Collections
