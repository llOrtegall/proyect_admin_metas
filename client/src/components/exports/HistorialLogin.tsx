import { utils, ColInfo, writeFile } from 'xlsx'
import { Logueo } from '../../types/interfaces'
import { Button } from '../Button'
import { toast } from 'sonner'

const generateExcelData = (datos: Logueo[]): unknown[] => {
  const titulo = [{ A: 'Reporte Historial Login Usuarios ' }]
  const headers = [
    {
      A: 'SUCURSAL',
      B: 'DOCUMENTO',
      C: 'NOMBRES',
      D: 'CARGO',
      E: 'HORA PRIMER LOGIN',
      F: 'HORA ULTIMO LOGIN',
    }
  ]

  const rows = datos.map((it) => ({
    A: it.SUCURSAL,
    B: it.DOCUMENTO,
    C: it.NOMBRES,
    D: it.NOMBRECARGO,
    E: it.FECHACREATE.split('T')[0].split('-').reverse().join('/') + ' - ' + it.FECHACREATE.split('T')[1].slice(0, 8),
    F: it.FECHAUPDATE.split('T')[0].split('-').reverse().join('/') + ' - ' + it.FECHAUPDATE.split('T')[1].slice(0, 8)
  }))

  return [...titulo, ...headers, ...rows]
}

const createExcelFile = (data: unknown[]): void => {
  const libro = utils.book_new()
  const hoja = utils.json_to_sheet(data, { skipHeader: true })

  hoja['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 6 } }]

  const colWidths: ColInfo[] = [
    { width: 10 }, { width: 10 }, { width: 30 }, { width: 10 }, { width: 20 },
    { width: 10 }, { width: 10 }, { width: 20 }, { width: 10 }, { width: 10 },
    { width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }, { width: 10 },
    { width: 10 }, { width: 10 }
  ]

  hoja['!cols'] = colWidths
  utils.book_append_sheet(libro, hoja, 'login_metas')
  writeFile(libro, 'Login_User_Metas.xlsx')
}

export const HistorialLogin = ({ datos }: { datos: Logueo[]}): JSX.Element => {
  const handleDownload = (): void => {
    const dataFinal = generateExcelData(datos)

    const promises = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: 'sonner' })
      }, 3000)
    })

    toast.promise(promises, {
      loading: 'Generando Archivo ...',
      description: 'Espere un momento',
      style: { background: '#fcd34d' },
      success: () => {
        createExcelFile(dataFinal)
        return 'Archivo Generado Correctamente'
      },
      error: 'Error al Generar Archivo'
    })
  }

  return (
    <Button onClick={handleDownload}>
      Exportar a Excel
    </Button>
  )
}