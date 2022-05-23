export const generalParams = [
  {
    name: 'sort',
    type: 'Model property',
    description: 'Query para clasificar las entidades de un modelo',
    default: 'createdAt',
    example: '/api/cars/index?sort=brand',
  },
  {
    name: 'order',
    type: 'string',
    description: 'Query para ordenar las entidades de un modelo',
    default: '1',
    options: ['1', '-1'],
    example: '/api/cars/index?order=1',
  },
  {
    name: 'limit',
    schema: {
      type: 'string',
    },
    description: 'Query para limitar el numero de entidades',
    default: 20,
    example: '/api/cars/index?limit=40',
  },
];
export const filterParams = [
  {
    name: 'opt',
    type: 'operation (strict - like)',
    description: 'Operacion de busqueda',
    default: 'strict',
    example: ['/api/cars/index?opt=strict', '/api/cars/index?opt=like'],
  },
  {
    name: '[model property]',
    type: 'car: [brand, color, model] - client: [email]',
    description: 'filtra entidades segun una propiedad',
    default: 'createdAt',
    example: ['/api/cars/index?brand=Toyota', '/api/cars/index?email=example99@'],
  },
];
