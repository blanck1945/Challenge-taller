import { NextFunction, Request, Response } from 'express';
import ValidationService from '../../ValidationService/ValidationService';
import ResponseService from '../../CoreService/ResponseService/ResponseService';
import Clients from '../model/Client';
import ExpressController from '../../CoreService/ExpressController/ExpressController';
import { ControllerEnums, ValidationSchemas } from '../../CoreService/types/enums';

class PostController extends ExpressController {
  private functions = {
    CREATE: 'create',
  };
  constructor() {
    super(ControllerEnums.clientsController);
  }

  async create(req: Request, res: Response) {
    const { mergeFields } = req.body;

    // Validacion general de la informacion.
    const { isValid, hasError } = await ValidationService.validateSchema(
      ValidationSchemas.CREATE_clientsSchema,
      mergeFields,
      this.controller,
      this.functions.CREATE
    );

    // Hay un error de validacion
    if (hasError.state)
      return res.send(
        ResponseService.errorResponse(hasError.internalCode, hasError.statusCode, hasError.message),
      );

    this.expressWrapper(req, res, {
      name: this.functions.CREATE,
      function: async () => {
        const client = await Clients.create(isValid);
        return {
          data: "Cliente creada con exito",
          id: client.id
        }
      },
    });
  }
}

export default PostController;
