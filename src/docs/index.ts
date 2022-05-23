import tags from './tags';
import servers from './servers';
import Schemas from './schemas';
import paths from './paths';

export default {
  openapi: '3.0.3', // present supported openapi version,
  ...Schemas,
  info: {
    title: 'Taller Mecanico', // short title.
    description: 'Challenge Pickit', //  desc.
    version: '1.0.0', // version number
    host: 'localhost:5000',
    basePath: './',
    contact: {
      name: 'John doe', // your name
      email: 'john@web.com', // your email
      url: 'web.com', // your website
    },
  },
  ...tags,
  ...servers,
  ...paths
};
