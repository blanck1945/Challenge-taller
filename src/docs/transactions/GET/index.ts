import { generalParams } from "../../params";

export default {
  // method of operation
  get: {
    tags: ['Transaction'], // operation's tag.
    description: 'Rutas index para obtener todas las entidades del modelo Transaction', // operation's desc.
    operationId: 'get.transaction.index', // unique operation id.
    parameters: generalParams, // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: 'Peticion exitosa - Array de objetos del modelo Transaction', // response desc.
        content: {
          // content-type
          'application/json': {
            schema: {
                type: 'obj',
                $ref: '#/components/schemas/Transaction',
              },
          },
        },
      },
    },
  },
};
