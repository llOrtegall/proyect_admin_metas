import { ThemeProvider } from './contexts/ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import Router from './routes'
import axios from 'axios'
import './index.css'

import { AuthProvider } from './contexts/AuthProvider'

axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
