/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useAuth } from '../auth/AuthProvider'
import { type Empresa } from '../types/user'
import React from 'react'
import { AlertIcon } from './icons/AlertIcon'

export function CambiarCompany (): JSX.Element {
  const { user, setUser } = useAuth()

  const handleEmpresaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEmpresa = e.target.value
    setUser({ ...user, empresa: selectedEmpresa as Empresa }) // Actualiza el contexto de autenticación con la empresa seleccionada
  }

  return (
    <>
      <div className="absolute inset-0 bg-black opacity-90 z-50"></div>
      <section className="fixed inset-0 flex items-center justify-center z-50">
        <article className="flex items-center py-8 border flex-col gap-4 p-4 mb-4 text-sm lg:text-xl text-yellow-400 bg-gray-900 rounded-xl" role="alert">
          <AlertIcon />
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Espera Antes De Continuar !</span> Tú cuenta se encuentra ligada a 2 Empresas
          </div>
          <select
            className='p-2 border rounded-lg text-blue-700 font-semibold cursor-pointer'
            onChange={handleEmpresaChange} // Llama a la función handleEmpresaChange cuando cambie la selección
          >

            <option className="text-black font-semibold">Seleccione una empresa</option>
            <option value='Servired' className="font-bold ">Servired</option>
            <option value='Multired' className="font-bold ">Multired</option>
          </select>
        </article>
      </section>
    </>
  )
}
