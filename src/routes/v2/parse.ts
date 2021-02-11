import { Request, Response, NextFunction } from 'express';
import { CommonRoutesConfig, CommonRoutesInterface } from "../../common/common.routes.config";
import { validateBody } from '../../common/requestValidator';

class Parse extends CommonRoutesConfig implements CommonRoutesInterface   {
  routes(): void {
    this.express.post("/", validateBody(), (req: Request, res: Response, next: NextFunction) => {
      const details = res.locals.input.data.split(/0+/g);
      const data = {
        firstName: details[0],
        lastName: details[1],
        clientId: details[2].replace(/(.{3})(.*)/, "$1-$2"),
      };
      res.json({ statusCode: 200, data});
    });

    this.express.use("*", (req: Request, res: Response, next: NextFunction) => {
      res.send("V2 Parse Route doesn't exist");
    });
  }
}

export default new Parse().express;
