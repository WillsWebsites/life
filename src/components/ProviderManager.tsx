import React, { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import UtilityControls from './UtilityControls'

const ProviderManager = ({ children }: { children: React.ReactNode }) => {
  return (
    <StrictMode>
      <BrowserRouter>
        {children}
        <UtilityControls />
      </BrowserRouter>
    </StrictMode>
  )
}

export default ProviderManager
