import React, { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import UtilityControls from './UtilityControls'
import { TooltipProvider } from './ui/tooltip'

const ProviderManager = ({ children }: { children: React.ReactNode }) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <TooltipProvider>
          {children}
          <UtilityControls />
        </TooltipProvider>
      </BrowserRouter>
    </StrictMode>
  )
}

export default ProviderManager
