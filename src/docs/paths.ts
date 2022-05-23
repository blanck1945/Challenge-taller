// Car Routes
import getCars from './car/routes/Get.routes';
import getCarsShow from './car/routes/GET/show';
import getCarServices from './car/routes/GET/services';
import postCarsCreate from './car/routes/POST/create';
import patchCarsUpdate from './car/routes/PATCH/update';
import deleteCarsRemove from './car/routes/DELETE/remove';
// Client Routes
import getClientsIndex from './client/routes/GET/index';
import getClientsShow from './client/routes/GET/show';
import postClientsCreate from './client/routes/POST/create';
import pathcClientsUpdate from './client/routes/PATCH/update';
import patchClientArchived from './client/routes/PATCH/archived';
import deleteClientsDelete from './client/routes/DELETE/remove';
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
    '/api/clients/create': postClientsCreate,
    '/api/clients/update/{clientId}': pathcClientsUpdate,
    '/api/clients/archived/{clientId}': patchClientArchived,
    '/api/clients/remove/{clientId}': deleteClientsDelete,
    '/api/transaction/index': getTransactionIndex,
    'api/transaction/show': getTransactionShow,
    '/api/transaction/create': postTransactionCreate,
    '/api/transaction/update/{transactionId}': patchTransactionUpdate,
    '/api/transaction/remove/{transactionId}': deleteTransactionRemove,
  },
};
