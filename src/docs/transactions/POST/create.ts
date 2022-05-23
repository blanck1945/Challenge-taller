export default {
  // method of operation
  post: {
    tags: ['Transaction'], // operation's tag.
    description: 'Ruta para crear entidades para el modelo Transaction', // operation's desc.
    operationId: 'get.transaction.create', // unique operation id.
    parameters: [], // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: 'Creacion exitosa', // response desc.
        content: {
          // content-type
          'application/json': {
            schema: {
              id: 'Mongo Id',
              example: { id: '6285d090d65e863facb3c655' },
            },
          },
        },
      },
    },
  },
};
