import * as Yup from 'yup';
import {
  availableOptsEnum,
  CarArrayProperties,
  CarProperties,
  colors,
  optToCheck,
} from '../CarsService/schemas/enums';
import { Models, ValidationSchemas } from '../CoreService/types/enums';
import { ServiceValidationOptions, OptEnum, Filters, FiltersResponse, Query } from './interfaces';
import mongoose from 'mongoose';

interface validResponse {
  isValid: any;
  hasError: any;
}

class ValidationService {
  serviceTypeMsg = 'Servicios solo permiten numeros del 1 al 6';

  private clientsSchema = Yup.object({
    firstName: Yup.string().required().trim().lowercase(),
    lastName: Yup.string().required().trim().lowercase(),
    email: Yup.string().email().trim().lowercase(),
  });

  private UPDATE_clientsSchema = Yup.object({
    firstName: Yup.string().trim().lowercase(),
    lastName: Yup.string().trim().lowercase(),
    email: Yup.string().email().trim().lowercase(),
  });

  private carsSchema = Yup.object({
    brand: Yup.string().required().trim(),
    model: Yup.string().required().trim(),
    year: Yup.number().positive().integer().required(),
    patent: Yup.string().required().trim(),
    color: Yup.string().oneOf(colors).required(),
  });

  private UpdateCarSchema = Yup.object({
    brand: Yup.string().trim(),
    model: Yup.string().trim(),
    year: Yup.number().integer(),
    patent: Yup.string().trim(),
    color: Yup.string().oneOf(colors),
    state: Yup.string().oneOf(optToCheck),
  });

  private CREATE_transactionSchema = Yup.object({
    services: Yup.array()
      .of(
        Yup.number()
          .typeError(this.serviceTypeMsg)
          .integer('Solo se permiten numeros enteros del 1 al 6')
          .min(1, this.serviceTypeMsg)
          .max(6, this.serviceTypeMsg),
      )
      .required(),
    car: Yup.string().required().trim(),
    client: Yup.string().required().trim(),
  });

  getPrivateVariable(variable: string) {
    return this[variable];
  }

  getOrderSchema(schema: ValidationSchemas) {
    return this[schema];
  }

  normalizeQuery(model: Models | string | string[], value: string, back?: string) {
    if (Array.isArray(model)) {
      return model.includes(value) ? value : back;
    }

    return model === value ? value : '';
  }

  checkQueryType(query) {
    return isNaN(query) ? 20 : query;
  }

  getErrorMsg(err) {
    if (err.includes('Illegal key')) return '';
  }

  normalizeOptQuery = (querys, func: string) => {
    try {
      const sort = this.normalizeQuery(
        CarArrayProperties,
        querys.sort as string,
        CarProperties.createdAt,
      );
      const order = this.normalizeQuery(['1', '-1'], querys.order as string, '1');
      const limit = this.checkQueryType(parseInt(querys.limit));

      return {
        sort,
        order,
        limit,
        hasError: {
          state: false,
        },
      };
    } catch (err) {
      console.warn({ msg: 'Este es un error' });
      return {
        hasError: {
          state: true,
          statusCode: 400,
          internalCode: `normalizeOptQuery - ${func} - XXC32FS`,
          message: this.getErrorMsg(err),
        },
      };
    }
  };

  async validateSchema(schemaEnum, data): Promise<validResponse> {
    if (!data)
      return {
        isValid: {},
        hasError: {
          state: true,
          internalCode: 'CC-UP-01',
          statusCode: 400,
          message: 'No hay datos para actualizar',
        },
      };
    const schema = this.getOrderSchema(schemaEnum);
    try {
      const isValid = await schema.validate(data);
      return {
        isValid,
        hasError: {
          state: false,
        },
      };
    } catch (err) {
      console.warn({ err });
      return {
        isValid: {},
        hasError: {
          state: true,
          internalCode: 'CC-UP-02',
          statusCode: 404,
          message: err.errors,
        },
      };
    }
  }

  validateQuery(availableOpt: availableOptsEnum[], opt: availableOptsEnum) {
    const isValid = availableOpt.includes(opt);

    if (isValid) {
      return {
        isValid: opt,
        hasError: {
          state: false,
        },
      };
    } else {
      return {
        isValid: {},
        hasError: {
          state: true,
          internalCode: 'CC-UP-02',
          statusCode: 404,
          message: 'Valor no soportado',
        },
      };
    }
  }

  async exectuteCheck(options) {
    const { opt, property, condition, controller, func } = options;

    try {
      const result = await opt();

      if (result[property] === condition) {
        return {
          hasServiceError: {
            state: true,
            internalCode: `${controller} - ${func} - ERR-334XV`,
            statusCode: 404,
            message: 'Servicio de pintura no disponible para autos de color gris',
          },
        };
      }

      return {
        hasServiceError: {
          state: false,
        },
      };
    } catch (err) {
      console.warn({ err });
      return err;
    }
  }

  async isIdValid(ids: string[], controller: string, func: string) {
    const validData = ids.map((id) => {
      return mongoose.isValidObjectId(id);
    });

    if (validData.includes(false)) {
      return {
        hasIdError: {
          state: true,
          internalCode: `${controller} - ${func}`,
          statusCode: 404,
          message: 'El tipo de Id no es correcto',
        },
      };
    }

    return {
      hasIdError: {
        state: false,
      },
    };
  }

  async validateService(restriction: () => void, options: ServiceValidationOptions) {
    if (restriction) {
      return this.exectuteCheck(options);
    }

    return {
      hasServiceError: {
        state: false,
      },
    };
  }

  opts = [OptEnum.strict, OptEnum.like];

  checkOptValue(opt: OptEnum) {
    return this.opts.includes(opt) ? opt : OptEnum.strict;
  }

  validateId(id: string, controller: string, func: string) {
    try {
      const sanitazeId = mongoose.Types.ObjectId(id);

      return {
        isValid: sanitazeId,
        hasError: {
          state: false,
        },
      };
    } catch (err) {
      return {
        isValid: {},
        hasError: {
          state: true,
          internalCode: `${controller} - ${func}`,
          statusCode: 404,
          message: 'El ID no es valido',
        },
      };
    }
  }

  filtersValidations(querys: any): FiltersResponse {
    let filters = {};
    let opt = OptEnum.strict;
    Object.entries(querys).map((el) => {
      if (el[0] === Query.opt) return (opt = this.checkOptValue(el[1] as OptEnum));
      if (el[0] === 'sort') return;
      if (el[0] === 'order') return;
      if (el[0] === 'limit') return;

      filters = {
        ...filters,
        [el[0]]: el[1],
      };
    });
    return {
      filters,
      opt,
    };
  }

  checkProperties(obj) {
    if (
      obj.hasOwnProperty('firstName') |
      obj.hasOwnProperty('lastName') |
      obj.hasOwnProperty('email')
    ) {
      return 'Client';
    }

    if (
      obj.hasOwnProperty('brand') |
      obj.hasOwnProperty('model') |
      obj.hasOwnProperty('color') |
      obj.hasOwnProperty('patent')
    )
      return 'Car';
  }

  typeGuardInterface(objToCheck) {
    const type = this.checkProperties(objToCheck);

    if (type === 'Client') {
      return {
        firstName: { $regex: objToCheck.firstName ?? '' },
        lastName: { $regex: objToCheck.lastName ?? '' },
        email: { $regex: objToCheck.email ?? '' },
      };
    }

    if (type === 'Car') {
      return {
        brand: { $regex: objToCheck.brand ?? '' },
        model: { $regex: objToCheck.model ?? '' },
        color: { $regex: objToCheck.color ?? '' },
        patent: { $regex: objToCheck.patent ?? '' },
      };
    }
  }

  getFilterSchema(filters: Filters, opt: string): any {
    if (opt === OptEnum.strict) {
      return filters;
    }
    return this.typeGuardInterface(filters);
  }
}

export default new ValidationService();
