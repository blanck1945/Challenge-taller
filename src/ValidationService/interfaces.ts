import { CarInterface } from '../CarsService/model/CarInterface';
import { CarColors, CarProperties } from '../CarsService/schemas/enums';

export interface ServiceValidationOptions {
  opt: any;
  property: CarProperties;
  condition: CarColors;
  controller: string;
  func: string;
}

export enum OptEnum {
  strict = 'strict',
  like = 'like',
}

export enum Query {
  opt = 'opt',
}

export interface FiltersInterface {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface CarFilterInterface {
  brand: string;
  model: string;
  year: string;
  color: string;
  patent: string;
}

export interface FiltersResponse {
  filters: FiltersInterface | CarFilterInterface;
  opt: string;
}

export type Filters = CarFilterInterface | FiltersInterface;

// () => Promise<CarInterface> | string,
