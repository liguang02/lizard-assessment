import { createServer } from 'miragejs';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api/posts';

    this.get('/', (schema, request) => {
      return schema.data.all();
    });
  },
});
