import * as express from "express";
import * as bodyParser from "body-parser";

export interface CommonRoutesInterface {
  express: express.Application;
  middleware(): void,
  routes(): void,
}

export abstract class CommonRoutesConfig {
    public express: express.Application;
  
    constructor() {
      this.express = express();
      this.middleware();
      this.routes();
    }

    // Express middleware.
     middleware(): void {
      this.express.use(bodyParser.json());
      this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    abstract routes(): void;
}