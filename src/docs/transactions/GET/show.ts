import { generalParams } from "../../params";

export default {
  // method of operation
  get: {
    tags: ['Transaction'], // operation's tag.
    description: 'Rutas index para obtener una entidad del modelo Transaction', // operation's desc.
    operationId: 'get.transaction.index', // unique operation id.
    parameters: [], // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: 'Peticion exitosa - Objetos del modelo Transaction', // response desc.
        content: {
          // content-type
          'application/json': {
            $ref: '#/components/schemas/Transaction',
          },
        },
      },
    },
  },
};
