import { createBrowserRouter } from 'react-router-dom';

import Root from './root';
import DashBoard from '../components/DashBoard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <DashBoard />
      }
    ]

  }
])

export default router;