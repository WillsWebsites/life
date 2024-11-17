interface Props {
  value: string | number
  name: string
}

const TopBarItem = ({ value, name }: Props) => {
  return (
    <div className="flex flex-col text-center min-w-[150px]">
      <span className="text-white text-2xl font-orbitron">{value}</span>
      <span className="text-white text-base">{name}</span>
    </div>
  )
}

export default TopBarItem
