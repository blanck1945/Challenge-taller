export default {
  // method of operation
  patch: {
    tags: ['Client'], // operation's tag.
    description: 'Ruta para editar entidades del modelo Client', // operation's desc.
    operationId: 'get.client.update', // unique operation id.
    parameters: [], // expected params.
    body: {
      mergeField: {
        firstName: 'string',
        lastName: 'string',
        email: 'string',
      },
      example: {
        firstName: 'Pedro',
        lastName: 'Tonio',
        email: 'toni990@gmail.com',
      },
    },
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
                data: 'Entidad {Mongo Id} fue modificada con exito'
              },
            },
          },
        },
      },
    },
  },
};
