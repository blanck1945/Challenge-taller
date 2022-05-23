export default {
    // method of operation
    get: {
      tags: ["Car"], // operation's tag.
      description: "Ruta show para el modelo car", // operation's desc.
      operationId: "get.car.show", // unique operation id.
      parameters: [
          {
            name: 'Car Id',
            description: 'Id del model Car',
            required: true,
            schema: {
                type: "Mongo Id",
                format: 'string',
                fromat: '6285d090d65e863facb3c655'
            }
          }
      ], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "Peticion exitosa", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Car", // Orders model
              },
            },
          },
        },
      },
    },
  };
  