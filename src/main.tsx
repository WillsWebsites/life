import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ProviderManager from './components/ProviderManager.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ProviderManager>
    <App />
  </ProviderManager>,
)
