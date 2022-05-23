export default {
  // Transaction model
  Transaction: {
    type: 'object', // data type
    properties: {
      services: {
        type: 'array', // data-type
        description: 'Array con los servicios a realizar', // desc
        example: '[1,4,6]', // example of a title,
        options: '[1,2,3,4,5,6]',
        restricciones: {
          color: 'servicio 5 no disponible para autos de color gris',
        },
      },
      car: {
        type: 'Mongo Id', // data type
        description: 'Id del auto', // desc
        example: '6285d090d65e863facb3c655', // example of a completed value
      },
      client: {
        type: 'Mongo Id', // data type
        description: 'Id del cliente', // desc
        example: '6285d090d65e863facb3c655', // example of a completed value
      },
    },
  },
  //   // error model
  //   Error: {
  //     type: 'object', //data type
  //     properties: {
  //       message: {
  //         type: 'string', // data type
  //         description: 'Error message', // desc
  //         example: 'Not found', // example of an error message
  //       },
  //       internal_code: {
  //         type: 'string', // data type
  //         description: 'Error internal code', // desc
  //         example: 'Invalid parameters', // example of an error internal code
  //       },
  //     },
  //   },
};
