import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Root (){
  return(
    <section className='flex h-screen w-full dark:bg-slate-800'>
      <NavBar />
      <main className='w-10/12 p-2'>
        <Outlet />
      </main>
    </section>
  )
}

export default Root;