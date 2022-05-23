import { NextFunction, Request, Response } from 'express';
import ExpressController from '../../CoreService/ExpressController/ExpressController';
import { ControllerEnums } from '../../CoreService/types/enums';
import ValidationService from '../../ValidationService/ValidationService';
import Transactions from '../model/Transaction';

class GetController extends ExpressController {
  private functions = {
    CHECK: 'check',
    INDEX: 'index',
    SHOW: 'show',
  };

  constructor() {
    super(ControllerEnums.TransactionController);
  }

  async check(req: Request, res: Response, next: NextFunction) {
    this.sanityCheck(req, res, next);
  }

  async index(req: Request, res: Response) {
    const { car, client } = req.query;
    const { filters, opt } = ValidationService.filtersValidations(req.query);
    const filterSchema = ValidationService.getFilterSchema(filters, opt);
    const { sort, order, limit } = ValidationService.normalizeOptQuery(
      req.query,
      this.functions.INDEX,
    );
    this.expressWrapper(req, res, {
      name: this.functions.INDEX,
      function: async () => {
        return await Transactions.find(filterSchema)
          .populate(car)
          .populate(client)
          .limit(limit)
          .sort({ [sort]: order });
      },
    });
  }

  async show(req: Request, res: Response) {
    const { transactionsId } = req.params;
    const { car, client } = req.query;
    this.expressWrapper(req, res, {
      name: this.functions.SHOW,
      function: async () => {
        return await Transactions.findById(transactionsId).populate(car).populate(client);
      },
    });
  }
}

export default GetController;
