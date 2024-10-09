import { RiHome2Line, RiMenu2Line } from '@remixicon/react'
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Card } from './Card';

function NavBar() {
  return (
    <nav className='flex flex-col bg-slate-200 dark:bg-gray-900 w-2/12 border-r border-slate-600 text-black dark:text-white'>
      <figure className='px-2 py-2 mb-2'>
        <Card className='flex items-center gap-2 hover:bg-indigo-700/20 cursor-pointer transition-all'>
          <span className='bg-indigo-900 py-2 px-3 rounded-md text-white'>GE</span>
          <p>Metas Admin Multired</p>
        </Card>
      </figure>
      <ul className='flex flex-col gap-2 flex-1'>
        <li>
          <NavLink to='/' className={({ isActive }) => isActive ? 'flex px-4 hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-s dark:text-yellow-200 transition-all' : 'flex px-4 hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-slate-400 transition-all'}>
            <RiHome2Line />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='Detalles' className={({ isActive }) => isActive ? 'flex px-4 hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-s dark:text-yellow-200 transition-all' : 'flex px-4 hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-slate-400 transition-all'}>
            <RiMenu2Line />
            <span>Detalles</span>
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center justify-center pb-2'>
        <ThemeToggle />
      </ul>
    </nav>
  );
}

export default NavBar;