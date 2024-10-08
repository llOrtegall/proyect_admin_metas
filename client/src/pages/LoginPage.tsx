import { Input, Button, Label } from '../components/iu'
import { UserIcon } from '../components/iu/userIcon'
import { LockIcon } from '../components/iu/LockIcon'
import { Error } from '../components/iu/error'
import { useLogin } from '../hooks/useLogin'

function LoginPage (): JSX.Element {
  const { user, setUser, password, setPassword, errorString, handleSubmit } = useLogin() // llama hook del login

  return (
    <section className="h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-sky-600 to-blue-300">
      <form className='w-[385px] mb-2 border p-12 rounded-lg bg-white/30 flex flex-col gap-6 shadow-xl' onSubmit={(ev) => { handleSubmit(ev) }}>

        <figure className='flex items-center justify-center'>
          <img src="/gane.webp" alt="logo de gane" className='w-[160px] ' />
        </figure>

        <article className='flex flex-col gap-1'>
          <Label>Usuario: </Label>
          <div className='flex items-center gap-2 w-full justify-around px-2'>
            <UserIcon />
            <Input name='username' type='text' placeholder='CP1118342523' required
            autoComplete='username' value={user}
              onChange={(ev) => { setUser(ev.target.value) }} />
          </div>
        </article>

        <article className='flex flex-col gap-1'>
          <Label>Contraseña:</Label>
          <div className='flex items-center gap-2 w-full justify-around px-2'>
            <LockIcon />
            <Input name='contraseña' type='password' placeholder='***********' required
            autoComplete='contraseña' value={password}
              onChange={(ev) => { setPassword(ev.target.value) }} />
          </div>
        </article>

        <article className='flex w-full items-center justify-center'>
          <Button>Iniciar Sesión</Button>
        </article>

      </form >

      <Error errorString={errorString} />

    </section >
  )
}

export default LoginPage
