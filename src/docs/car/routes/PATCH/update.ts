export default {
  // method of operation
  patch: {
    tags: ['Car'], // operation's tag.
    description: 'Ruta para editar entidades del modelo car', // operation's desc.
    operationId: 'get.car.update', // unique operation id.
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
