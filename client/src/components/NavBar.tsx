import { NavLink } from "react-router-dom";
import { Card } from "./Card";

function NavBar() {
  return (
    <nav className="bg-slate-800 w-2/12">
      <figure className="px-2 py-2">
        <Card className="flex items-center gap-2 hover:bg-indigo-700/20 cursor-pointer transition-all border-none">
          <span className="bg-indigo-900 py-2 px-3 rounded-md">GE</span>
          <p>Metas Admin Multired</p>
        </Card>
      </figure>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;