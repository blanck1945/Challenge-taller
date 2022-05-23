import getClientsIndex from './routes/GET/index';
import getClientsShow from './routes/GET/show';
import getClientsCreate from './routes/POST/create';
// import patchCarsUpdate from './routes/PATCH/update';
// import deleteCarsRemove from './routes/DELETE/remove'

export default {
  paths: {
    '/api/clients/index': getClientsIndex,
    '/api/clients/show/{clientId}': getClientsShow,
    '/api/cars/create': getClientsCreate,
    // '/cars/update/{carId}': patchCarsUpdate,
    // '/cars/remove/{carId}': deleteCarsRemove
  },
};
