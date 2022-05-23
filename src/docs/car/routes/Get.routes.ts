import { filterParams, generalParams } from '../../params';

export default {
  // method of operation
  get: {
    tags: ['Car'], // operation's tag.
    description: 'Rutas Get para el modelo car', // operation's desc.
    operationId: 'get.car', // unique operation id.
    parameters: [...filterParams, ...generalParams], // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: 'Peticion exitosa - Array de objetos del model Car', // response desc.
        content: {
          // content-type
          'application/json': {
            schema: {
              type: 'obj',
              $ref: '#/components/schemas/Car',
            },
          },
        },
      },
    },
  },
};
