export default {
  // method of operation
  get: {
    tags: ['Client'], // operation's tag.
    description: 'Rutas index para obtener todas las entidades del modelo Cliente', // operation's desc.
    operationId: 'get.client.index', // unique operation id.
    parameters: [
      {
        type: 'number',
        description: 'Query para limitar el numero de registro',
        default: 20,
        example: '/api/cars/create?limit=40',
      },
    ], // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: 'Peticion exitosa - Array de objetos del modelo Cliente', // response desc.
        content: {
          // content-type
          'application/json': {
            schema: {
              type: 'obj',
              $ref: '#/components/schemas/Client',
              example: {
                state: true,
                lifecycle: 'end-success',
                data: '6285bf24d6ebc94ea057618e',
              },
            },
          },
        },
      },
    },
  },
};
