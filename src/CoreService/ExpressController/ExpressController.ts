import { NextFunction, Request, Response } from 'express';
import ErrorService from '../ErrorService/Error';
import ApiError from '../ErrorService/ErrorService';
import LogService from '../LogService/LogService';
import ResponseService from '../ResponseService/ResponseService';
import { ErrorEnums } from '../types/enums';

class ExpressController {
  private controllerFunctions = {
    CONTROLLER_SANITY: 'sanityCheck',
    CONTROLLER_GET_FUNCTIONS: 'getControllerFunctions',
    CONTROLLER_GET_METHODS: 'getControllerMethods',
    CONTROLLER_EXPRESS_WRAPPER: 'expressWrapper',
  };
  private controllerMethods = {
    INIT: 'init',
    END_SUCCESS: 'endSuccess',
    END_ERROR: 'endError',
  };
  controller: string;
  process: string;

  constructor(controller: string) {
    this.controller = controller;
    this.process = process.env.NODE_ENV;
  }

  private init(func: string) {
    LogService.logger(ErrorEnums.WARN, `${LogService.logMessages.INIT} ${func}`);
  }

  private endSuccess(func: string) {
    LogService.logger(ErrorEnums.SUCCESS, `${LogService.logMessages.END_SUCCESS} ${func}`);
  }

  private endError(err: Error) {
    LogService.logger(ErrorEnums.ERROR, `${LogService.logMessages.END_SUCCESS} ${err.message}`);
  }

  async sanityCheck(req: Request, res: Response, next: NextFunction) {
    this.init(this.controllerFunctions.CONTROLLER_SANITY);

    try {
      this.endSuccess(this.controllerFunctions.CONTROLLER_SANITY);
      ResponseService.succesResponse(res, {
        controller: this.controller,
      });
    } catch (err) {
      this.endError(err);
      next(ApiError.internalServerError(err.message));
    }
  }

  async getControllerFunctions(req: Request, res: Response, next: NextFunction) {
    this.init(this.controllerFunctions.CONTROLLER_GET_FUNCTIONS);
    try {
      this.endSuccess(this.controllerFunctions.CONTROLLER_GET_FUNCTIONS);
      ResponseService.succesResponse(res, this.controllerFunctions);
    } catch (err) {
      LogService.logger(ErrorEnums.ERROR, err);
      next(ApiError.internalServerError(err.message));
    }
  }

  async getControllerMethods(req: Request, res: Response, next: NextFunction) {
    this.init(this.controllerFunctions.CONTROLLER_GET_METHODS);
    try {
      this.endSuccess(this.controllerFunctions.CONTROLLER_GET_METHODS);
      ResponseService.succesResponse(res, this.controllerMethods);
    } catch (err) {
      LogService.logger(ErrorEnums.ERROR, err);
      next(ApiError.internalServerError(err.message));
    }
  }

  async isDev() {
    return this.process === 'development';
  }

  checkIfRecordIsEmpty(query) {
    return query === null ? { data: 'No hay registro con ese ID' } : query;
  }

  async expressWrapper(req: Request, res: Response, controllerFunction: any) {
    this.isDev() && this.init(controllerFunction.name);
    try {
      const response = await controllerFunction.function();

      this.isDev() && this.endSuccess(controllerFunction.name);

      res.status(200).json(response);
    } catch (err) {
      this.isDev() && this.endError(err);
      res.status(500).json(ErrorService.getErrorType(err));
    }
  }
}

export default ExpressController;
