import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Root (){
  return(
    <section className='flex h-screen w-full'>
      <NavBar />
      <section className='w-8/12'>
        <Outlet />
      </section>
    </section>
  )
}

export default Root;