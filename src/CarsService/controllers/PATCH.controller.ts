import { Request, Response } from 'express';
import ExpressController from '../../CoreService/ExpressController/ExpressController';
import { ControllerEnums, ValidationSchemas } from '../../CoreService/types/enums';
import ResponseService from '../../CoreService/ResponseService/ResponseService';
import ValidationService from '../../ValidationService/ValidationService';
import Cars from '../model/Car';

class PostController extends ExpressController {
  private functions = {
    UPDATE: 'update',
  };

  constructor() {
    super(ControllerEnums.carsController);
  }

  async update(req: Request, res: Response) {
    const { carId } = req.params;
    const { mergeFields } = req.body;

    // Validacion general de la informacion.
    const { isValid, hasError } = await ValidationService.validateSchema(
      ValidationSchemas.UPDATE_CarSchema,
      mergeFields,
      this.controller,
      this.functions.UPDATE
    );

    // Error en la validacion general
    if (hasError.state)
      return res.send(
        ResponseService.errorResponse(hasError.internalCode, hasError.statusCode, hasError.message),
      );

    // Se ejecuta la funcion para actualizar
    this.expressWrapper(req, res, {
      name: this.functions.UPDATE,
      function: async () => {
        await Cars.updateOne({ _id: carId }, { ...isValid });
        return {
          data: `Entidad ${carId} fue modificada con exito`,
        };
      },
    });
  }
}

export default PostController;
