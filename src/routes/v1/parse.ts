import { Request, Response, NextFunction } from "express";
import {
  CommonRoutesConfig,
  CommonRoutesInterface,
} from "../../common/common.routes.config";
import { validateBody } from "../../common/requestValidator";

class Parse extends CommonRoutesConfig implements CommonRoutesInterface {
  routes(): void {
    this.express.post(
      "/",
      validateBody(),
      (req: Request, res: Response, next: NextFunction) => {
        const details = res.locals.input.data.split(/(0+)/g);
        const data = {
          firstName: details[0] + details[1],
          lastName: details[2] + details[3],
          clientId: details[4],
        };
        res.json({ statusCode: 200, data });
      }
    );

    this.express.use("*", (req: Request, res: Response, next: NextFunction) => {
      res.send("V1 Parse Route doesn't exist");
    });
  }
}

export default new Parse().express;
