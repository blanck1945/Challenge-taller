import getCars from './car/routes/Get.routes';
import getCarsShow from './car/routes/GET/show';
import getClientsIndex from './client/routes/GET/index';

const getPaths = {
    ...getCars,
    ...getCarsShow,
    ...getClientsIndex,
};

export default {
    servers: [
      {
        url: "http://localhost:5000/todos", // url
        description: "DEV server", // name,
        paths: {
          ...getPaths,
        }
      },
    ],
  };