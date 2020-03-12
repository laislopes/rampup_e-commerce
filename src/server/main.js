const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const environment = require('../config/environment');
const products = require('../app/models/Product/Product.js');
const routes = require('../app/routes/routes.js');
const loggerMiddleware = require('../app/middlewares/logger');

class Main {
  constructor(env) {
    this.env = env;
  }

  init() {
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  startServer() {
    this.init();
    this.app.listen(this.env.port || 5000);
  }

  config() {
    this.app.use(cors());
    this.dataBase();
    this.Swagger();
  }

  middlewares() {
    this.app.use(loggerMiddleware);
  }

  routes() {
    this.app.use(routes);
  }

  dataBase() {
    mongoose.connect(
      'mongodb://localhost:27017/ecommerce',
      { useNewUrlParser: true, useUnifiedTopology: true });
  }

  Swagger() {

    const swaggerOptions = {
      swaggerDefinition: {
        info: {
          title: 'Rampup Backend',
          description: 'Web API Rampup Backend',
          contact: {
            name: 'Laís Lopes'
          },
          servers: [`${this.env.base_url}${this.env.port}`]
        }
      },
      apis: ['../app/routes/*.js']
    };

    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
  }

}

module.exports = Main;

const main = new Main(environment);
main.startServer();
