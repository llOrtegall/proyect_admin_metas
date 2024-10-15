import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Toaster } from "sonner";

function Root (){
  return(
    <section className='flex h-screen w-full dark:bg-slate-800'>
      <NavBar />
      <main className='w-10/12 p-2 h-screen overflow-y-auto'>
        <Outlet />
      </main>
      <Toaster position="top-right" duration={4000} visibleToasts={4} richColors/>
    </section>
  )
}

export default Root;