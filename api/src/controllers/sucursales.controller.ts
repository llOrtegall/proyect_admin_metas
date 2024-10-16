import { Sucursal } from '../model/sucursal.model';

export const createSucursal = async (req: any, res: any) => {
  try {
    await Sucursal.sync();

    res.status(200).json({ message: 'Sucursal created' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating sucursal' });
  }
}