export default {
  // method of operation
  patch: {
    tags: ['Client'], // operation's tag.
    description: 'Ruta para archivar entidades del modelo Client', // operation's desc.
    operationId: 'get.client.update', // unique operation id.
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
        description: 'Usuario archivado exitosa', // response desc.
        content: {
          // content-type
          'application/json': {
            schema: {
              type: 'obj',
              example: {
                data: "Usuario {Mongo Id} archivado"
              },
            },
          },
        },
      },
    },
  },
};
