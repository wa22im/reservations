import { NextFunction, Response,Request } from 'express';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  next()
};

export default authMiddleware;
