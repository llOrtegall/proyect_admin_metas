import { URL_API_LOGIN, APP_NAME} from '../utils/constants'
import { RiUserLine, RiLockLine } from '@remixicon/react'
import { useAuth } from '../contexts/AuthProvider'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Toaster, toast } from 'sonner'
import { FormEvent } from 'react'
import axios from 'axios'

function LoginPage() {
  const { setIsAuthenticated } = useAuth()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement;
    const username = form.username.value;
    const password = form.password.value;

    axios.post(`${URL_API_LOGIN}/login`, { username, password, app: APP_NAME })
      .then((res) => {
        if(res.status === 200){
          setIsAuthenticated(true)
        } 
      })
      .catch((error) => {
        console.log('error', error)
        toast.error('Usuario o contraseña incorrectos', { description: 'Por favor, intenta de nuevo' })
      })

  }

  return (
    <section className='w-full h-screen flex flex-col items-center justify-center  relative'>
      <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'><div className='absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]' /></div>

      <form className='w-96 mb-2 p-12 rounded-lg bg-transparent/10 flex flex-col gap-4 shadow-xl' onSubmit={handleSubmit}>
        <figure className='flex justify-center'>
          <img src='/gane.webp' alt='Logo Gane' width={180} />
        </figure>

        <article className='w-full flex flex-col text-black'>
          <label className='font-semibold'>Usuario</label>
          <div className='flex items-center'>
            <RiUserLine />
            <Input
              className='w-full p-2 rounded-md border-none outline-none'
              placeholder='CV1118*****'
              autoComplete='username'
              name='username'
              type='text'
              required
            />
          </div>
        </article>

        <article className='w-full flex flex-col text-black'>
          <label className='font-semibold'>Contraseña</label>
          <div className='flex items-center'>
            <RiLockLine />
            <Input
              className='w-full p-2 rounded-md border-none outline-none' required
              placeholder='**********'
              name='password'
              type='password'
            />
          </div>
        </article>

        <Button type='submit' >
          Iniciar Sesión
        </Button>
      </form>

      <Toaster richColors position='top-right' duration={5000} visibleToasts={3} />
    </section>

  )
}

export default LoginPage