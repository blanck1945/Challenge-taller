import { NextFunction, Request, Response } from 'express';
import ExpressController from '../../CoreService/ExpressController/ExpressController';
import ValidationService from '../../ValidationService/ValidationService';
import Cars from '../model/Car';
import { ControllerEnums } from '../../CoreService/types/enums';
import { CarProperties } from '../schemas/enums';
import ResponseService from '../../CoreService/ResponseService/ResponseService';

class GetController extends ExpressController {
  private functions = {
    CHECK: 'check',
    INDEX: 'index',
    INDEX_V2: 'indexV2',
    SHOW: 'show',
    SHOW_V2: 'showV2',
    CAR_SERVICES: 'carServices',
    FILTER: 'filter',
  };

  constructor() {
    super(ControllerEnums.carsController);
  }

  async getCarServices(carId) {
    const carModelInstance = new Cars();
    return await carModelInstance.getServices(carId);
  }

  async check(req: Request, res: Response, next: NextFunction) {
    this.sanityCheck(req, res, next);
  }

  async index(req: Request, res: Response) {
    const { filters, opt } = ValidationService.filtersValidations(req.query);
    const filterSchema = ValidationService.getFilterSchema(filters, opt);
    const { sort, order, limit } = ValidationService.normalizeOptQuery(
      req.query,
      this.functions.INDEX,
    );

    this.expressWrapper(req, res, {
      name: this.functions.INDEX,
      function: async () => {
        return await Cars.find(filterSchema)
          .sort({ [sort]: order })
          .limit(limit);
      },
    });
  }

  async indexV2(req: Request, res: Response) {
    const { sort, order, limit } = ValidationService.normalizeOptQuery(
      req.query,
      this.functions.INDEX_V2,
    );

    this.expressWrapper(req, res, {
      name: this.functions.INDEX_V2,
      function: async () => {
        return await Cars.aggregate([
          {
            $lookup: {
              from: 'clients',
              localField: CarProperties.owner,
              foreignField: '_id',
              as: 'owner',
            },
          },
          { $limit: limit },
          {
            $sort: {
              [sort]: parseInt(order),
            },
          },
        ]);
      },
    });
  }

  async show(req: Request, res: Response) {
    const { carId } = req.params;

    // Se valida que el ID sea aceptado por Mongo
    const { isValid, hasError } = ValidationService.validateId(
      carId,
      this.controller,
      this.functions.SHOW,
    );

    // Error en la validacion del ID
    if (hasError.state)
      return res.send(
        ResponseService.errorResponse(hasError.internalCode, hasError.statusCode, hasError.message),
      );

    this.expressWrapper(req, res, {
      name: this.functions.SHOW,
      function: async () => {
        const car = await Cars.findById(isValid).populate(CarProperties.owner);
        return this.checkIfRecordIsEmpty(car);
      },
    });
  }

  async showV2(req: Request, res: Response) {
    const { carId } = req.params;

    // Se valida que el ID sea aceptado por Mongo
    const { isValid, hasError } = ValidationService.validateId(
      carId,
      this.controller,
      this.functions.SHOW,
    );

    // Error en la validacion del ID
    if (hasError.state)
      return res.send(
        ResponseService.errorResponse(hasError.internalCode, hasError.statusCode, hasError.message),
      );

    this.expressWrapper(req, res, {
      name: this.functions.SHOW_V2,
      function: async () => {
        const car = await Cars.aggregate([
          { $match: { _id: isValid } },
          {
            $lookup: {
              from: 'clients',
              localField: CarProperties.owner,
              foreignField: '_id',
              as: 'owner',
            },
          },
        ]);
        return this.checkIfRecordIsEmpty(car);
      },
    });
  }

  async carServices(req: Request, res: Response) {
    const { carId } = req.params;

    this.expressWrapper(req, res, {
      name: this.functions.CAR_SERVICES,
      function: async () => {
        const cars = await Cars.findById(carId);
        const services = await this.getCarServices(cars.id);
        return {
          ...cars.toJSON(),
          history: services,
        };
      },
    });
  }
}

export default GetController;
