import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import Dashboard from '../pages/Dashboar';

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