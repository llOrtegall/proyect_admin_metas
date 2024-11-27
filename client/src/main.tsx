import { ThemeProvider } from './contexts/ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import Router from './routes'
import axios from 'axios'
import './index.css'

axios.defaults.baseURL = import.meta.env.VITE_API_URL!

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </StrictMode>,
)
