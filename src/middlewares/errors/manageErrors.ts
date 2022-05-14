import { Response, Request, NextFunction } from 'express';

const manageErrors = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message } = err;

  switch (name) {
    case 'RequiredError': res.status(400).json({ message });
      break;
    case 'ValidationError': res.status(422).json({ message });
      break;
    case 'NotFoundError': res.status(404).json({ message });
      break;
    case 'ConflictError': res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
      break;
  }
  
  next();
};

export default manageErrors;