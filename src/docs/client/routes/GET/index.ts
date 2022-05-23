import { generalParams } from '../../../params';

export default {
  // method of operation
  get: {
    tags: ['Client'], // operation's tag.
    description: 'Rutas index para obtener todas las entidades del modelo Cliente', // operation's desc.
    operationId: 'get.client.index', // unique operation id.
    parameters: generalParams, // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: 'Peticion exitosa - Array de objetos del modelo Cliente', // response desc.
        content: {
          // content-type
          'application/json': {
            $ref: '#/components/schemas/Client',
          },
        },
      },
    },
  },
};
