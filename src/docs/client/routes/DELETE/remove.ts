export default {
  // method of operation
  delete: {
    tags: ['Client'], // operation's tag.
    description: 'Ruta para eliminar entidades del modelo Client', // operation's desc.
    operationId: 'get.client.remove', // unique operation id.
    parameters: [
      {
        name: 'Mongo Id',
        description: 'Id del model Client',
        required: true,
        example: '/api/clients/remove/62832f0d3fdd5b23109be718',
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
