export default {
  // method of operation
  patch: {
    tags: ['Transaction'], // operation's tag.
    description: 'Ruta para editar entidades del modelo Transaction', // operation's desc.
    operationId: 'get.transaction.update', // unique operation id.
    parameters: [], // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: 'Edicion exitosa', // response desc.
        content: {
          // content-type
          'application/json': {
            schema: {
              type: 'obj',
              example: {
                data: 'Entidad modificada con exito',
              },
            },
          },
        },
      },
    },
  },
};
