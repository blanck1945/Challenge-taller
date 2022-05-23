import getCars from './routes/Get.routes';
import getCarsShow from './routes/GET/show';
import postCarsCreate from './routes/POST/create';
import patchCarsUpdate from './routes/PATCH/update';
import deleteCarsRemove from './routes/DELETE/remove'

export default {
  paths: {
    '/cars/index': getCars,
    '/cars/show/{carId}': getCarsShow,
    '/cars/create': postCarsCreate,
    '/cars/update/{carId}': patchCarsUpdate,
    '/cars/remove/{carId}': deleteCarsRemove
  },
};
