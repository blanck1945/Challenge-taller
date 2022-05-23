import mongoose from 'mongoose';
import { ValidationServiceProperties } from '../../CoreService/types/enums';
import ValidationService from '../../ValidationService/ValidationService';
import Transactions from '../../TransactionsService/model/Transaction';
import { availableOptsEnum } from '../schemas/enums';
import { CarInterface } from './CarInterface';

const CarsSchema = new mongoose.Schema<CarInterface>(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    patent: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      enum: ValidationService.getPrivateVariable(ValidationServiceProperties.colors),
      required: true,
    },
    state: {
      type: String,
      default: availableOptsEnum.working,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: true,
    },
  },
  {
    collection: 'cars',
    timestamps: true,
  },
)

CarsSchema.methods.getServices = async (_id: string) => {
  return await Transactions.find({ car: _id }).limit(20);
};

interface CarModel extends CarInterface {
  getServices: (_id: string) => any;
}

const Cars = mongoose.model<CarModel>('Car', CarsSchema);
export default Cars;
