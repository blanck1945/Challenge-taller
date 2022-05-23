import { generalParams, filterParams } from '../../../params';

export default {
  // method of operation
  get: {
    tags: ['Client'], // operation's tag.
    description: 'Ruta show para el modelo Client filtrado', // operation's desc.
    operationId: 'get.client.filter', // unique operation id.
    parameters: [...generalParams, ...filterParams], // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: 'Peticion exitosa', // response desc.
        content: {
          // content-type
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Client', // Orders model
            },
          },
        },
      },
    },
  },
};
