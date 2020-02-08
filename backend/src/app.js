import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
  // chamado automáticamente quanto App instânciado
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  // todos os middlewares do app
  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

// exportar apenas o server
export default new App().server;
