import { NextFunction, Request, Response } from 'express';
import ExpressController from '../../CoreService/ExpressController/ExpressController';
import { ControllerEnums } from '../../CoreService/types/enums';
import Cars from '../model/Car';

class DeleteController extends ExpressController {
  private functions = {
    REMOVE: 'remove',
  };

  constructor() {
    super(ControllerEnums.carsController);
  }

  async remove(req: Request, res: Response) {
    const { carId } = req.params;
    this.expressWrapper(req, res, {
      name: this.functions.REMOVE,
      function: async () => {
        await Cars.deleteOne({ _id: carId });
        return {
          data: `Registro eliminado con extio - ${carId}`
        }
      },
    });
  }
}

export default DeleteController