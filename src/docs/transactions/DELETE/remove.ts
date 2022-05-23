export default {
  // method of operation
  delete: {
    tags: ['Transaction'], // operation's tag.
    description: 'Ruta para eliminar entidades del modelo Transaction', // operation's desc.
    operationId: 'get.transaction.remove', // unique operation id.
    parameters: [
      {
        name: 'Transaction Id',
        description: 'Id del model Transaction',
        required: true,
        schema: {
          type: 'Mongo Id',
          format: 'string',
          fromat: '6285d090d65e863facb3c655',
        },
      },
    ], // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: 'Se borro la entidad con exito', // response desc.
        content: {
          // content-type
          'application/json': {
            schema: {
              type: 'obj',
              example: {
                data: 'Registro eliminado con extio - {Mongo Id}',
              },
            },
          },
        },
      },
    },
  },
};
