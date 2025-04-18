import { SucursalesPowerBi } from '../model/sucpowerbi.model';
import { HoraDispoSucursal } from '../model/hora_dispo_suc';
import { Request, Response } from 'express';

export const getSucursalesPowerBi = async (req: Request, res: Response) => {
  const param = req.query;
  const zona = param.zona as string;

  try {
    const sucursales = await SucursalesPowerBi.findAll({
      where: { ZONA: zona }
    });

    console.log(sucursales.length);

    res.status(200).json(sucursales);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener las sucursales' });
  }
}

export const getSucursalPowerBi = async (req: Request, res: Response) => {
  try {
    const { codigo } = req.params;
    const sucursal = await SucursalesPowerBi.findOne({
      where: { CODIGO: codigo }
    })

    const horaDispo = await HoraDispoSucursal.findAll({
      where: { CODIGO: codigo }
    });

    if (!sucursal || !horaDispo) {
      return res.status(404).json({ message: 'No se encontró la sucursal y/o hora disponibilidad' });
    }

    res.status(200).json({ sucursal, horaDispo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener la sucursal' });
  }
}

export const updateSucursalPowerBi = async (req: Request, res: Response) => {

  const {
    SUPERVISOR,
    CANAL,
    HORA_ENTRADA,
    HORA_SALIDA,
    HORA_ENTRADA_FES,
    HORA_SALIDA_FES,
    SUBZONA,
    CELULA,
    HORAS_ORDINARIAS,
    HORAS_FESTIVAS,
    ESTADO,
    CODIGO,
  } = req.body;

  try {
    const sucursal = await SucursalesPowerBi.findOne({
      where: { CODIGO: CODIGO }
    });

    if (!sucursal) {
      return res.status(404).json({ message: 'No se encontró la sucursal' });
    }

    sucursal.SUPERVISOR = SUPERVISOR;
    sucursal.CANAL = CANAL;
    sucursal.HORA_ENTRADA = HORA_ENTRADA;
    sucursal.HORA_SALIDA = HORA_SALIDA;
    sucursal.HORA_ENTRADA_FES = HORA_ENTRADA_FES;
    sucursal.HORA_SALIDA_FES = HORA_SALIDA_FES;
    sucursal.SUBZONA = SUBZONA;
    sucursal.CELULA = CELULA;
    sucursal.HORAS_ORDINARIAS = HORAS_ORDINARIAS;
    sucursal.HORAS_FESTIVAS = HORAS_FESTIVAS;
    sucursal.ESTADO = ESTADO;

    await sucursal.save();

    res.status(200).json(sucursal);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al actualizar la sucursal' });
  }
}