import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import parseRouter from './parse';
import { CommonRoutesConfig, CommonRoutesInterface } from '../../common/common.routes.config';

class Routes extends CommonRoutesConfig implements CommonRoutesInterface  {
  routes(): void {
    this.express.use("/parse", parseRouter);

    this.express.use("*", (req: Request, res: Response, next: NextFunction) => {
      res.send("V2 Route doesnt exist");
    });
  }
}

export default new Routes().express;