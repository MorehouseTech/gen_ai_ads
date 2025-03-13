import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import Netflix from './pages/Netflix.tsx'
import AIinfo from './pages/AIinfo.tsx'
import AdPage from './pages/AdPage.tsx' 
import Hulu from './pages/Hulu.tsx'
import Youtube from './pages/Youtube.tsx'
//router imports

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
    {
      path: "/Netflix",
      element: <Netflix />
    },
    {
      path: "/Hulu",
      element: <Hulu />
    },
    {
      path: "/AIinfo/:title/:category/:company",
      element: <AIinfo />
    },
    {
      path: "/AdPage/:title/:category",
      element: <AdPage />
    },
    {
      path: "/Youtube",
      element: <Youtube />
    }

]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
