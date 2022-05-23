export default {
    // method of operation
    post: {
      tags: ['Client'], // operation's tag.
      description: 'Ruta para crear entidades para el modelo Client', // operation's desc.
      operationId: 'get.client.create', // unique operation id.
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
          description: 'Creacion exitosa', // response desc.
          content: {
            // content-type
            'application/json': {
              schema: {
                type: 'obj',
                $ref: {
                  state: 'boolean',
                  lifecycle: 'string',
                  data: 'string'
                },
                example: {
                  state: true,
                  lifecycle: "end-success",
                  data: "6285bf24d6ebc94ea057618e"
                }
              },
            },
          },
        },
      },
    },
  };