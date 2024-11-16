import BigBang from '@/components/BigBang'
import { cn } from '@/lib/utils'

const CreateLife = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div className={cn('w-full h-full transition-all animate-fadeIn animate-fadeOut')}>
      <BigBang onComplete={onComplete} />
    </div>
  )
}

export default CreateLife
