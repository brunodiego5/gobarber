import express from 'express';
import routes from './routes';

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
  }

  routes() {
    this.server.use(routes);
  }
}

// exportar apenas o server
export default new App().server;
