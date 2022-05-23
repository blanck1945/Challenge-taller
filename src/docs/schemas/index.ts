import ClientSchema from './client';
import CarSchema from './car';
import TransactionSchema from './transaction';

export default {
  components: {
    schemas: {
      ...ClientSchema,
      ...CarSchema,
      ...TransactionSchema,
    },
  },
};
