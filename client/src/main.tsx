import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import router from './routes/index.tsx'

import './index.css'

createRoot(document.getElementById('root')!)
  .render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )

