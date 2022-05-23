import { NextFunction, Request, Response } from 'express';
import ResponseService from '../../CoreService/ResponseService/ResponseService';
import ValidationService from '../../ValidationService/ValidationService';
import Transactions from '../model/Transaction';
import { CarColors, CarProperties } from '../../CarsService/schemas/enums';
import ExpressController from '../../CoreService/ExpressController/ExpressController';
import { ControllerEnums, ValidationSchemas } from '../../CoreService/types/enums';
import Cars from '../../CarsService/model/Car';

class PostController extends ExpressController {
  private functions = {
    CREATE: 'create',
  };

  constructor() {
    super(ControllerEnums.TransactionController);
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const { mergeFields } = req.body;

    // Validacion general del cuerpo de la request
    const { isValid, hasError } = await ValidationService.validateSchema(
      ValidationSchemas.CREATE_transactionSchema,
      mergeFields,
    );

    // Hay un error de validacion
    if (hasError.state)
      return res.send(
        ResponseService.errorResponse(hasError.internalCode, hasError.statusCode, hasError.message),
      );

    // Validacion de los tipos de Ids
    const { hasIdError } = await ValidationService.isIdValid(
      [isValid.car, isValid.owner],
      this.controller,
      this.functions.CREATE,
    );

    // Hay un error en los Ids
    if (hasIdError.state)
      return res.send(
        ResponseService.errorResponse(
          hasIdError.internalCode,
          hasIdError.statusCode,
          hasIdError.message,
        ),
      );

    // Validacion del servicio
    const { hasServiceError } = await ValidationService.validateService(
      mergeFields.services.includes(5),
      {
        opt: async () => await Cars.findById(mergeFields.car),
        property: CarProperties.color,
        condition: CarColors.gray,
        controller: this.controller,
        func: this.functions.CREATE,
      },
    );

    if (hasServiceError.state)
      return res.send(
        ResponseService.errorResponse(
          hasServiceError.internalCode,
          hasServiceError.statusCode,
          hasServiceError.message,
        ),
      );

    this.expressWrapper(req, res, {
      name: this.functions.CREATE,
      function: async () => {
        const transaction = await Transactions.create(isValid);
        return transaction;
      },
    });
  }
}

export default PostController;
