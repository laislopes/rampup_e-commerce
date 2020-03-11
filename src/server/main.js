const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const environment = require('../config/environment');
const routes = require('../app/routes');
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
    this.dataBaseConnection();
  }

  startServer() {
    this.init();
    this.app.listen(this.env.port || 5000);
  }

  config() {
    this.app.use(cors());
  }

  middlewares() {
    this.app.use(loggerMiddleware);
  }

  routes() {
    this.app.use(routes);
  }

  dataBaseConnection() {
    mongoose.connect(
      'mongodb://localhost:27017/ecommerce',
      { useNewUrlParser: true, useUnifiedTopology: true });
  }
}

module.exports = Main;

const main = new Main(environment);
main.startServer();
