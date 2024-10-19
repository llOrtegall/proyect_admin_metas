import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';

import Dashboard from '../pages/Dashboard';
import Detalles from '../pages/Detalles';
import ProductDetail from '../pages/ProductDetail';
import VentaHora from '../pages/VentaHora';
import NotFound from '../pages/NotFound';
import Sugeridos from '../pages/Sugeridos';
import UsuariosLogueados from '../pages/UsuariosLog';
import SucursalesPage from '../pages/Sucursales';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'Detalles',
        element: <Detalles />
      },
      {
        path: 'Sugeridos',
        element: <Sugeridos />
      },
      {
        path: 'Sucursales',
        element: <SucursalesPage />
      },
      {
        path: 'Usuarios',
        element: <UsuariosLogueados />
      },
      {
        path: 'ProductDetail/:name',
        element: <ProductDetail />
      },
      {
        path: 'ventaHora/:codigo',
        element: <VentaHora />
      }
    ]
  }
])

export default Router;