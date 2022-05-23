import { NextFunction, Request, Response } from 'express';
import Clients from '../model/Client';
import ExpressController from '../../CoreService/ExpressController/ExpressController';
import { ControllerEnums } from '../../CoreService/types/enums';
import ValidationService from '../../ValidationService/ValidationService';

class GetController extends ExpressController {
  private functions = {
    INDEX: 'index',
    SHOW: 'show',
    FILTER: 'filter',
  };
  constructor() {
    super(ControllerEnums.clientsController);
  }

  async check(req: Request, res: Response, next: NextFunction) {
    this.sanityCheck(req, res, next);
  }

  async index(req: Request, res: Response) {
    const { filters, opt } = ValidationService.filtersValidations(req.query);
    const filterSchema = ValidationService.getFilterSchema(filters, opt);
    const { sort, order, limit } = ValidationService.normalizeOptQuery(
      req.query,
      this.functions.FILTER,
    );

    this.expressWrapper(req, res, {
      name: this.functions.FILTER,
      function: async () => {
        return await Clients.find(filterSchema)
          .sort({ [sort]: order })
          .limit(limit);
      },
    });
  }

  async show(req: Request, res: Response) {
    const { clientId } = req.params;

    this.expressWrapper(req, res, {
      name: this.functions.SHOW,
      function: async () => {
        return await Clients.findById(clientId);
      },
    });
  }
}

export default GetController;
