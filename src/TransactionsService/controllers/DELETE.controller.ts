import { NextFunction, Request, Response } from 'express';
import ExpressController from '../../CoreService/ExpressController/ExpressController';
import { ControllerEnums } from '../../CoreService/types/enums';
import Transactions from '../model/Transaction';

class DeleteController extends ExpressController {
  private functions = {
    REMOVE: 'remove',
  };

  constructor() {
    super(ControllerEnums.TransactionController);
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    const { transactionsId } = req.params;
    this.expressWrapper(req, res, {
      name: this.functions.REMOVE,
      function: async () => {
        await Transactions.deleteOne({ _id: transactionsId });
        return {
          data: `Registro eliminado con extio - ${transactionsId}`,
        };
      },
    });
  }
}

export default DeleteController;
