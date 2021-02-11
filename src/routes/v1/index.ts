import { Request, Response, NextFunction } from 'express';
import { CommonRoutesConfig, CommonRoutesInterface } from "../../common/common.routes.config";
import parseRouter from "./parse";

class Routes extends CommonRoutesConfig implements CommonRoutesInterface {
  routes(): void {
    this.express.use("/parse", parseRouter);

    this.express.use("*", (req: Request, res: Response, next: NextFunction) => {
      res.send("V1 Route doesnt exist");
    });
  }
}

export default new Routes().express;
