import React, { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Collections from './Collections'
import UtilityControls from './UtilityControls'
import { TooltipProvider } from './ui/tooltip'

const ProviderManager = ({ children }: { children: React.ReactNode }) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <TooltipProvider>
          {children}
          <Collections />
          <UtilityControls />
        </TooltipProvider>
      </BrowserRouter>
    </StrictMode>
  )
}

export default ProviderManager
