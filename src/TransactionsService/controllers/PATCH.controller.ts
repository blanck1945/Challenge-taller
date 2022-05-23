import { NextFunction, Request, Response } from 'express';
import ResponseService from '../../CoreService/ResponseService/ResponseService';
import ValidationService from '../../ValidationService/ValidationService';
import ExpressController from '../../CoreService/ExpressController/ExpressController';
import { ControllerEnums, ValidationSchemas } from '../../CoreService/types/enums';
import Transactions from '../model/Transaction';

class PatchController extends ExpressController {
  private functions = {
    UPDATE: 'update',
  };

  constructor() {
    super(ControllerEnums.TransactionController);
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const { transactionsId } = req.params;
    const { mergeFields } = req.body;

    //
    const { isValid, hasError } = await ValidationService.validateSchema(
      ValidationSchemas.UPDATE_CarSchema,
      mergeFields,
      this.controller,
      this.functions.UPDATE
    );

    // Hay un error de validacion
    if (hasError.state)
      return res.send(
        ResponseService.errorResponse(hasError.internalCode, hasError.statusCode, hasError.message),
      );

    this.expressWrapper(req, res, {
      name: this.functions.UPDATE,
      function: async () => {
        const re = await Transactions.updateOne({ _id: transactionsId }, { ...isValid });
        return {
          data: `Entidad ${transactionsId} fue modificada con exito`,
        };
      },
    });
  }
}

export default PatchController;
