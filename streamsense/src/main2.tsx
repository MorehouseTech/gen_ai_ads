import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import Netflix from './pages/Netflix.tsx'
import AIinfo from './pages/AIinfo.tsx'
import AdPage from './pages/AdPage.tsx' 
import Hulu from './pages/Hulu.tsx'
import Youtube from './pages/Youtube.tsx'
import PrimeVideo from './pages/PrimeVideo.tsx'
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
      path: "/Hulu/:passed",
      element: <Hulu />
    },
    {
      path: "/AIinfo/:title/:category/:company/:product",
      element: <AIinfo />
    },
    {
      path: "/AdPage/:title/:category",
      element: <AdPage />
    },
    {
      path: "/Youtube",
      element: <Youtube />
    },
    {
      path: "/AmazonPrime",
      element: <PrimeVideo />
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
