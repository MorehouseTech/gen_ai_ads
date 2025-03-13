import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import Netflix from './pages/Netflix.tsx'
import Hulu from './pages/Hulu.tsx'
import AIinfo from './pages/AIinfo.tsx'
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
      path: "/Hulu/:passed",
      element: <Hulu />
    },
    {
      path: "/AIinfo/:title/:category",
      element: <AIinfo />
    }

]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
