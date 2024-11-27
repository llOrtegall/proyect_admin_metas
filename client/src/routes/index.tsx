import { createBrowserRouter } from 'react-router-dom';

import SucursalDetail from '../pages/SucursalDetail';
import UsuariosLogueados from '../pages/UsuariosLog';
import ProductDetail from '../pages/ProductDetail';
import SucursalesPage from '../pages/Sucursales';
import Dashboard from '../pages/Dashboard';
import VentaHora from '../pages/VentaHora';
import Sugeridos from '../pages/Sugeridos';
import Detalles from '../pages/Detalles';
import NotFound from '../pages/NotFound';
import Root from './Root';

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
      },
      {
        path: 'Sucursal/:codigo',
        element: <SucursalDetail />
      }
    ]
  }
])

export default Router;