import CarSchema from '../../../schemas/car';

export default {
  // method of operation
  get: {
    tags: ['Car'], // operation's tag.
    description: 'Ruta services para el modelo Car con sus servicios', // operation's desc.
    operationId: 'get.car.services', // unique operation id.
    parameters: [], // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: 'Peticion exitosa - Objecto Car con sus servicios', // response desc.
        content: {
          // content-type
          'application/json': {
            schema: {
              type: 'obj',
              properties: {
                ...CarSchema,
                history: {
                  type: 'obj',
                  properties: {
                    _id: 'Mongo Id',
                    client: 'Mongo Id',
                    car: 'Mongo Id',
                    createdAt: 'Date',
                    updatedAt: 'Date',
                    serviceData: [
                      {
                        serviceName: 'string',
                        price: 'number/string',
                        estimateDays: 'number/string',
                      },
                    ],
                    totalCost: 'number',
                    estimateDays: 'number',
                  },
                },
              },
              example: {
                brand: 'Toyota',
                model: 'Corolla',
                year: 2011,
                patent: 'AB 123 CD',
                color: 'white',
                owner: '6285d08fd65e86dsdacb3c653',
                history: {
                  services: [1, 4, 6],
                  _id: '6285d08fd65e863facb3c653',
                  client: '62832eae3fdd5b23109be716',
                  car: '6285bf24d6ebc94ea057618e',
                  createdAt: '2022-05-19T05:07:27.408Z',
                  updatedAt: '2022-05-19T05:07:27.408Z',
                  __v: 0,
                  servicesData: [
                    {
                      serviceName: 'Cambio de Aceite',
                      price: 300,
                      estimateDays: 4,
                    },
                    {
                      serviceName: 'Revisión General',
                      price: 2100,
                      estimateDays: 10,
                    },
                    {
                      serviceName: 'Otro',
                      price: 'Definir',
                      estimateDays: null,
                    },
                  ],
                  totalCost: 2400,
                  estimateDays: 14,
                  id: '6285d08fd65e863facb3c653',
                },
              },
            },
          },
        },
      },
    },
  },
};
