import { CarColors } from '../../CoreService/types/enums';

export default {
  // Client model
  Client: {
    type: 'object', // data type
    properties: {
      firstName: {
        type: 'string', // data-type
        description: 'Nombre del cliente', // desc
        example: 'Maria - Pedro - Agustina', // example of a title
      },
      lastName: {
        type: 'string', // data type
        description: 'Apellido del cliente', // desc
        example: 'Zapata -  Carrique - Ini', // example of a completed value
      },
      email: {
        type: 'string - email', // data type
        description: 'Email del cliente', // desc
        example: 'example@gmail.com', // example of a completed value
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
