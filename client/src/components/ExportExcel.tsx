import { utils, ColInfo, writeFile } from 'xlsx'
import { Sugerido } from '../pages/Sugeridos'
import { toast } from 'sonner'

const generateExcelData = (datos: Sugerido[]) => {
  const titulo = [{ A: 'Reporte Sugeridos' }]
  const headers = [
    {
      A: 'Sucursal',
      B: 'Documento',
      C: 'Nombres',
      D: 'Sugerido 1',
      E: 'Sugerido 2',
      F: 'Venta Sugerido',
      G: 'Meta Sugerido 1',
      H: 'Meta Sugerido 2',
    }
  ]

  const rows = datos.map( sugerido => ({
    A: sugerido.sucursal,
    B: sugerido.documento,
    C: sugerido.nombres,
    D: sugerido.sugerido1,
    E: sugerido.sugerido2,
    F: sugerido.venta_sugerido,
    G: sugerido.meta_sugerido1,
    H: sugerido.meta_sugerido2
  }))

  return [...titulo, ...headers, ...rows]
}

const createExcelFile = (datos: Sugerido[]) => {
  const Informacion = generateExcelData(datos)

  const libro = utils.book_new()
  const hoja = utils.json_to_sheet(Informacion, { skipHeader: true })

  hoja['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 6 } }]

  const colWidths: ColInfo[] = [
    { width: 10 }, { width: 10 }, { width: 30 }, { width: 10 }, { width: 20 },
    { width: 10 }, { width: 10 }, { width: 20 }, { width: 10 }, { width: 10 },
    { width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }, { width: 10 },
    { width: 10 }, { width: 10 }
  ]

  hoja['!cols'] = colWidths
  utils.book_append_sheet(libro, hoja, 'Sugeridos')
  writeFile(libro, 'ReporteSugeridos.xlsx')
}

const ButtonExportExcel = ({ datos }: { datos: Sugerido[] }): JSX.Element => {
  const handleDownload = (): void => {

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
        createExcelFile(datos)
        return 'Archivo Generado Correctamente'
      },
      error: 'Error al Generar Archivo'
    })
  }

  return (
    <button className='bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-500 text-xs 2xl:text-sm 3xl:text-base' onClick={handleDownload}>
      Export Excel
    </button>
  )
}

export default ButtonExportExcel;