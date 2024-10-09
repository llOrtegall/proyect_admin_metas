import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import Dashboard from '../pages/Dashboard';
import Detalles from '../pages/Detalles';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'Detalles',
        element: <Detalles />
      }
    ]
  }
])

export default Router;