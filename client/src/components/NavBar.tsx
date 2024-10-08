import { useTheme } from '../contexts/ThemeContext'
import { NavLink } from 'react-router-dom'
import { Switch } from '@tremor/react'

const Links = [
  { link: '/', name: 'Home' },
  { link: '/detalles', name: 'Detalles' }
]

const LinkComponent = ({ link, name }: { link: string, name: string }): JSX.Element => {
  return (
  <li>
    <NavLink to={`${link}`} className='text-gray-800 font-medium hover:text-white'>{name}</NavLink>
  </li>
  )
}

function NavBar (): JSX.Element {
  const { toggleTheme } = useTheme()

  return (
    <nav className='bg-malibu-300 lg:py-2'>
      <ul className='flex items-center justify-around'>

        <figure className='flex'>
          <img src="/gane.webp" alt="logo de gane" className='w-24 py-2 lg:w-20 xl:w-24 2xl:w-28 ' />
        </figure>

        <div className='hidden lg:flex gap-4 text-xl'>
          {Links.map((link, index) => <LinkComponent key={index} link={link.link} name={link.name} />)}
        </div>

        <article className='hidden lg:flex lg:gap-4'>
          <Switch onChange={toggleTheme} />
        </article>

      </ul>
    </nav>
  )
}

export default NavBar
