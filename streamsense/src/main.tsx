import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import Netflix from './pages/Netflix.tsx'
import AIinfo from './pages/AIinfo.tsx'
import AdPage from './pages/AdPage.tsx' 
import Hulu from './pages/Hulu.tsx'
import Youtube from './pages/Youtube.tsx'
import PrimeVideo from './pages/PrimeVideo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/gen_ai_ads">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Netflix" element={<Netflix />} />
        <Route path="/Hulu" element={<Hulu />} />
        <Route path="/Hulu/:passed" element={<Hulu />} />
        <Route path="/AIinfo/:title/:category/:company/:product" element={<AIinfo />} />
        <Route path="/AdPage/:title/:category" element={<AdPage />} />
        <Route path="/Youtube" element={<Youtube />} />
        <Route path="/AmazonPrime" element={<PrimeVideo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
