import { Request, Response } from 'express';
import ExpressController from '../../CoreService/ExpressController/ExpressController';
import { ControllerEnums, ValidationSchemas } from '../../CoreService/types/enums';
import ResponseService from '../../CoreService/ResponseService/ResponseService';
import ValidationService from '../../ValidationService/ValidationService';
import Cars from '../model/Car';

class PostController extends ExpressController {
  private functions = {
    CREATE: 'create',
  };

  constructor() {
    super(ControllerEnums.carsController);
  }

  async create(req: Request, res: Response) {
    const { mergeField } = req.body;

    // Validacion general de la informacion.
    const { isValid, hasError } = await ValidationService.validateSchema(
      ValidationSchemas.CREATE_carsSchema,
      mergeField,
      this.controller,
      this.functions.CREATE
    );

    // Error en la validacion general
    if (hasError.state)
      return res.send(
        ResponseService.errorResponse(hasError.internalCode, hasError.statusCode, hasError.message),
      );

    // Validacion de los tipos de Ids
    const { hasIdError } = await ValidationService.isIdValid(
      [isValid.owner],
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

    // Se eejcuta la funcion para crear
    this.expressWrapper(req, res, {
      name: this.functions.CREATE,
      function: async () => {
        const car = await Cars.create(isValid);
        return {
          data: "Auto creada con exito",
          id: car.id
        }
      },
    });
  }
}

export default PostController;
