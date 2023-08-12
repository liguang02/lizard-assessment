import { createServer } from 'miragejs';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', (schema, request) => {
      return data;
    });
  },
});
