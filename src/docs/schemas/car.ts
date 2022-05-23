
export default {
  // Car model
  Car: {
    type: 'object', // data type
    properties: {
      brand: {
        type: 'string', // data-type
        description: 'Marca del auto', // desc
        example: 'Toyota/Chevrolet/Renault', // example of a title
      },
      model: {
        type: 'string', // data type
        description: 'Modelo del auto', // desc
        example: 'Corolla/Agile/', // example of a completed value
      },
      year: {
        type: 'number', // data type
        description: 'Fecha de fabricación', // desc
        example: '19xx/20xx', // example of a completed value
      },
      patent: {
        type: 'string', // data type
        description: 'Patente del auto', // desc
        example: 'AB 123 CD', // example of a completed value
      },
      color: {
        type: 'string', // data type
        description: 'Color del auto', // desc
        example: 'negro/blanco/gris/rojo', // example of a completed value
      },
      owner: {
        type: 'Mongo Id',
        description: 'Id referencia del cliente',
        example: '6285d090d65e863facb3c655',
        exampleModel: {
          _id: '6285d090d65e863facb3c655',
          firstName: 'Pedro',
          lastName: 'Tonio',
          email: 'tonio990@gmail.com',
          createAt: "2022-05-17T05:12:14.959+00:00",
          updatedAt: "2022-05-17T05:12:14.959+00:00"
        },
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
