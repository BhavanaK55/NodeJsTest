import { validate, IsDefined } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { plainToClass, Expose } from "class-transformer";

class ParseDto {
  // required
  @IsDefined()
  @Expose()
  data: string;
}

// Validate properties in req.body
export const validateBody = () => {
  return function (req: Request, res: Response, next: NextFunction) {
    const output: any = plainToClass(ParseDto, req.body);
    validate(output, { skipMissingProperties: false }).then((errors) => {
      if (errors.length > 0) {
        console.log(errors);
        let errorTexts = Array();
        for (const errorItem of errors) {
          errorTexts = errorTexts.concat(errorItem.constraints);
        }
        res.status(400).send(errorTexts);
        return;
      } else {
        res.locals.input = output;
        next();
      }
    });
  };
};
