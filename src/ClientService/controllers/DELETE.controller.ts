import { Request, Response } from 'express';
import Clients from '../model/Client';
import ExpressController from '../../CoreService/ExpressController/ExpressController';
import { ControllerEnums } from '../../CoreService/types/enums';

class DeleteController extends ExpressController {
  private functions = {
    REMOVE: 'remove'
  };
  constructor() {
    super(ControllerEnums.clientsController);
  }

  async remove(req: Request, res: Response) {
    const { clientId } = req.params;

    this.expressWrapper(req, res, {
      name: this.functions.REMOVE,
      function: async () => {
        await Clients.deleteOne({ _id: clientId });

        return {
          data: `Registro eliminado con extio - ${clientId}`
        }
      },
    });
  }
}

export default DeleteController