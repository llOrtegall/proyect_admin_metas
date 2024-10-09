import { NavLink } from "react-router-dom";
import { RiHome2Line, RiMenu2Line } from '@remixicon/react'
import { Card } from "./Card";

function NavBar() {
  return (
    <nav className="bg-slate-900 w-2/12 border-r border-slate-600">
      <figure className="px-2 py-2 mb-2">
        <Card className="flex items-center gap-2 hover:bg-indigo-700/20 cursor-pointer transition-all">
          <span className="bg-indigo-900 py-2 px-3 rounded-md">GE</span>
          <p>Metas Admin Multired</p>
        </Card>
      </figure>
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'flex px-4 hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-yellow-200 transition-all' : 'flex px-4 hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-slate-400 transition-all'}>
            <RiHome2Line />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="Detalles" className={({ isActive }) => isActive ? 'flex px-4 hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-yellow-200 transition-all' : 'flex px-4 hover:bg-indigo-600/20 mx-2 rounded-md py-2  gap-2 text-slate-400 transition-all'}>
            <RiMenu2Line />
            <span>Detalles</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;