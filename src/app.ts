import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import v1Router from './routes/v1';
import v2Router from './routes/v2';
import { CommonRoutesConfig, CommonRoutesInterface } from './common/common.routes.config';

class App extends CommonRoutesConfig implements CommonRoutesInterface   {
  routes(): void {
    // Version 1
    this.express.use("/api/v1", v1Router);
    // Version 2
    this.express.use("/api/v2", v2Router);

    this.express.use("*", (req: Request, res: Response, next: NextFunction) => {
      res.send("API does not exist");
    });
  }
}

export default new App().express;