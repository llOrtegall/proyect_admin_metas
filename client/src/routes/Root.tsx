import { Outlet } from "react-router-dom";

function Root (){
  return(
    <div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Root;