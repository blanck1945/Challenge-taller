// Car Routes
import getCars from './car/routes/Get.routes';
import getCarsShow from './car/routes/GET/show';
import getCarServices from './car/routes/GET/services'
import postCarsCreate from './car/routes/POST/create';
import patchCarsUpdate from './car/routes/PATCH/update';
import deleteCarsRemove from './car/routes/DELETE/remove';
// Client Routes
import getClientsIndex from './client/routes/GET/index';
import getClientsShow from './client/routes/GET/show';
import getClientsCreate from './client/routes/POST/create';
import getClientsUpdate from './client/routes/PATCH/update';
import getClientsDelete from './client/routes/DELETE/remove';
// Transaction Routes
import getTransactionIndex from './transactions/GET/index';
import getTransactionShow from './transactions/GET/show';
import postTransactionCreate from './transactions/POST/create';
import patchTransactionUpdate from './transactions/PATCH/update';
import deleteTransactionRemove from './transactions/DELETE/remove';


export default {
  paths: {
    '/api/cars/index': getCars,
    '/api/cars/show/{carId}': getCarsShow,
    '/api/car/services/{carId}': getCarServices,
    '/api/cars/create': postCarsCreate,
    '/api/cars/update/{carId}': patchCarsUpdate,
    '/api/cars/remove/{carId}': deleteCarsRemove,
    '/api/clients/index': getClientsIndex,
    '/api/clients/show/{clientId}': getClientsShow,
    '/api/clients/create': getClientsCreate,
    '/api/clients/update/{clientId}': getClientsUpdate,
    '/api/clients/remove/{clientId}': getClientsDelete,
    '/api/transaction/index': getTransactionIndex,
    'api/transaction/show': getTransactionShow,
    '/api/transaction/create': postTransactionCreate,
    '/api/transaction/update/{transactionId}': patchTransactionUpdate,
    '/api/transaction/remove/{transactionId}': deleteTransactionRemove
  },
};
