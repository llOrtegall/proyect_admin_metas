import { RiHome2Line, RiMenu2Line, RiFileChartLine, RiStore3Line } from '@remixicon/react'
import { URL_API_LOGIN } from '../utils/constants';
import { useAuth } from '../contexts/AuthProvider';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Button } from './Button';
import { Card } from './Card';
import axios from 'axios';

function NavBar() {
  const { empresa, setIsAuthenticated } = useAuth();
  const handleLogout = () => {
    axios.post(`${URL_API_LOGIN}/logout`)
      .then((res) => {
        console.log(res)
        setIsAuthenticated(false)
      })
      .catch((err) => console.log(err))
  };

  return (
    <nav className='flex flex-col bg-slate-200 dark:bg-gray-900 w-2/12 border-r space-y-2 border-slate-600 text-black dark:text-white'>
      <figure className='px-0.5 py-0.5 mb-2 text-xs 2xl:text-sm 3xl:text-xl pt-2'>
        <Card className='flex items-center p-3 gap-2 hover:bg-indigo-700/20 cursor-pointer transition-all'>
          <span className='bg-indigo-900 py-2 px-3 rounded-md text-white'>GE</span>
          <p className='text-center'>Metas Admin {empresa}</p>
        </Card>
      </figure>
      <ul className='flex flex-col gap-2 flex-1 text-xs 2xl:text-sm 3xl:text-lg' >
        <li>
          <NavLink to='/' className={({ isActive }) => isActive ? 'flex px-4 items-center hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-s dark:text-yellow-200 transition-all' : 'flex px-4 items-center hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-slate-400 transition-all'}>
            <RiHome2Line />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='Sugeridos' className={({ isActive }) => isActive ? 'flex px-4 items-center hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-s dark:text-yellow-200 transition-all' : 'flex px-4 items-center hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-slate-400 transition-all'}>
            <RiFileChartLine />
            <span>Sugeridos</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='Usuarios' className={({ isActive }) => isActive ? 'flex px-4 items-center hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-s dark:text-yellow-200 transition-all' : 'flex px-4 items-center hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-slate-400 transition-all'}>
            <RiMenu2Line />
            <span>Usuarios Logueados</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='Sucursales' className={({ isActive }) => isActive ? 'flex px-4 items-center hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-s dark:text-yellow-200 transition-all' : 'flex px-4 items-center hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-slate-400 transition-all'}>
            <RiStore3Line />
            <span>Sucursales</span>
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center justify-center pb-2'>
        <ThemeToggle />
      </ul>
      <ul className='flex items-center justify-center pb-2'>
        <Button onClick={() => handleLogout()}>
          Cerrar Sesión
        </Button>
      </ul>
    </nav>
  );
}

export default NavBar;