export default {
  // method of operation
  post: {
    tags: ['Car'], // operation's tag.
    description: 'Ruta para crear entidades para el modelo car', // operation's desc.
    operationId: 'get.car.create', // unique operation id.
    parameters: [], // expected params.
    body: {
      mergeField: {
        brand: 'string',
        model: 'string',
        year: 'number',
        patent: 'string',
        color: 'string',
        owner: 'Mongo Id',
      },
      example: {
        brand: 'Toyota',
        model: 'Corolla',
        year: 2012,
        patent: 'TT 866 RF',
        color: 'gris',
        owner: '6285bf10d6ebc94ea057618c',
      },
    },
    // expected responses
    responses: {
      // response code
      200: {
        description: 'Creacion exitosa', // response desc.
        content: {
          // content-type
          'application/json': {
            schema: {
              type: 'obj',
              example: {
                data: "Auto creada con exito",
                id: '[Mongo Id]'
              },
            },
          },
        },
      },
    },
  },
};
