import { cn } from '@/lib/utils'

interface Props {
  value: string | number
  name: string
  busting?: boolean
}

const TopBarItem = ({ value, name, busting }: Props) => {
  return (
    <div className="flex flex-col text-center min-w-[150px] bg-slate-500/20 rounded-lg p-2">
      <span className={cn('text-2xl font-orbitron', busting && 'animate-rainbow')}>{value}</span>
      <span className="text-white text-base">{name}</span>
    </div>
  )
}

export default TopBarItem
