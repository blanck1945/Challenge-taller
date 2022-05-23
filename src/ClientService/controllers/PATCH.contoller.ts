import { NextFunction, Request, Response } from 'express';
import ValidationService from '../../ValidationService/ValidationService';
import ResponseService from '../../CoreService/ResponseService/ResponseService';
import Clients from '../model/Client';
import ExpressController from '../../CoreService/ExpressController/ExpressController';
import { ClientState } from '../types/enums';
import { ControllerEnums, ValidationSchemas } from '../../CoreService/types/enums';

class PatchController extends ExpressController {
  private functions = {
    UPDATE: 'update',
  };
  constructor() {
    super(ControllerEnums.clientsController);
  }

  async update(req: Request, res: Response) {
    const { clientId } = req.params;
    const { mergeFields } = req.body;

    // Validacion general de la informacion.
    const { isValid, hasError } = await ValidationService.validateSchema(
      ValidationSchemas.CREATE_clientsSchema,
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
        const client = await Clients.updateOne({ _id: clientId }, { ...isValid });
        return {
          data: `Entidad ${clientId} fue modificada con exito`,
        };
      },
    });
  }

  async archived(req: Request, res: Response) {
    const { clientId } = req.params;

    this.expressWrapper(req, res, {
      name: this.functions.UPDATE,
      function: async () => {
        const client = await Clients.updateOne(
          { _id: clientId },
          {
            state: ClientState.archived,
            archived_init: Date.now(),
            archived_finish: new Date().getTime() + 2592000000,
          },
        );
        return {
          data: `Usuario ${clientId} archivado`
        }
      },
    });
  }
}

export default PatchController;
