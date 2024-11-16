import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

const ProviderManager = ({ children }: { children: React.ReactNode }) => {
  return (
    <StrictMode>
      <BrowserRouter>{children}</BrowserRouter>
    </StrictMode>
  );
};

export default ProviderManager;
