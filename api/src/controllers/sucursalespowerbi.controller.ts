import { SucursalesPowerBi } from '../model/sucpowerbi.model';
import { Request, Response } from 'express';

export const getSucursalesPowerBi = async (req: Request, res: Response) => {
  try {
    const sucursales = await SucursalesPowerBi.findAll({
      where: { ZONA: '39627' }
    });

    console.log(sucursales.length);

    res.status(200).json(sucursales);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener las sucursales' });
  }
}
