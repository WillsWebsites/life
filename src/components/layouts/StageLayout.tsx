import React from 'react'

const StageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full animate-fade-in-3 relative flex flex-col items-center justify-center">
      {children}
    </div>
  )
}

export default StageLayout
