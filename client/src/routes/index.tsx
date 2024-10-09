import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import Dashboard from '../pages/Dashboard';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Dashboard />
      }
    ]
  }
])

export default Router;