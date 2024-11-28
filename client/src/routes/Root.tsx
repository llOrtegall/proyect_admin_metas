import { useAuth } from '../contexts/AuthProvider';
import LoginPage from '../pages/LoginPage';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Toaster } from 'sonner';

function Root() {
  const { isAuthenticated, empresa, setEmpresa } = useAuth();

  if (!isAuthenticated) {
    return <LoginPage />
  }

  return (
    empresa !== 'MultiredYServired' ? (
      <section className='flex h-screen w-full dark:bg-slate-800'>
        <NavBar />
        <main className='w-10/12 h-screen overflow-y-auto'>
          <Outlet />
        </main>
        <Toaster position='top-right' duration={4000} visibleToasts={4} richColors />
      </section>
    ) : (
      <div className='fixed inset-0 z-50 flex justify-center items-center bg-gray-500 bg-opacity-75'>
        <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
          <h2 className='text-lg font-semibold mb-4 text-gray-800'>Selecionar Empresa</h2>
          <div className='flex flex-col gap-4'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={() => setEmpresa('Multired')}
            >
              Multired
            </button>
            <button
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
              onClick={() => setEmpresa('Servired')}
            >
              Servired
            </button>
          </div>
        </div>
      </div>
    )
  )
}

export default Root;