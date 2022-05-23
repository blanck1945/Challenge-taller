import mongoose from 'mongoose';
import { TransactionInterface } from '../types/interface';

const TransactionsSchema = new mongoose.Schema<TransactionInterface>(
  {
    services: {
      type: [Number],
      required: true,
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Car"
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Client"
    },
  },
  {
    collection: 'transactions',
    timestamps: true,
  },
);

const getTotal = (services) => {
  const totals = services.map((serviceId) => {
    switch (serviceId) {
      case 1:
        return 300;
      case 2:
        return 500;
      case 3:
        return 1100;
      case 4:
        return 2100;
      case 5:
        return 3000;
      default:
        return 0;
    }
  });

  return totals.reduce((a, b) => a + b);
};

const getEstimateDays = (services) => {
  const totals = services.map((serviceId) => {
    switch (serviceId) {
      case 1:
        return 4;
      case 2:
        return 5;
      case 3:
        return 4;
      case 4:
        return 10;
      case 5:
        return 7;
      default:
        return 0;
    }
  });

  return totals.reduce((a, b) => a + b);
};

const getServiceData = (services) => {
  return services.map((serviceId) => {
    switch (serviceId) {
      case 1:
        return {
          serviceName: 'Cambio de Aceite',
          price: 300,
          estimateDays: 4,
        };
      case 2:
        return {
          serviceName: 'Cambio de Filtro',
          price: 500,
          estimateDays: 5,
        };
      case 3:
        return {
          serviceName: 'Cambio de Correa',
          price: 1100,
          estimateDays: 4,
        };
      case 4:
        return {
          serviceName: 'Revisión General',
          price: 2100,
          estimateDays: 10,
        };
      case 5:
        return {
          serviceName: 'Pintura',
          price: 3000,
          estimateDays: 7,
        };
      default:
        return {
          serviceName: 'Otro',
          price: 'Definir',
          estimateDays: null,
        };
    }
  });
};

TransactionsSchema.set('toObject', { virtuals: true });
TransactionsSchema.set('toJSON', { virtuals: true });

TransactionsSchema.virtual('servicesData').get(function () {
  return (this.service = getServiceData(this.services));
});

TransactionsSchema.virtual('totalCost').get(function () {
  return (this.total = getTotal(this.services));
});

TransactionsSchema.virtual('estimateDays').get(function () {
  return (this.estimate = getEstimateDays(this.services));
});

const ServicesSchema = {};

const Transactions = mongoose.model('Transaction', TransactionsSchema);
export default Transactions;
