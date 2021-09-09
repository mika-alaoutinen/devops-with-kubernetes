import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line import/prefer-default-export
export const logRequest = async (req: Request, _res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);

  if (req.method === 'POST') {
    console.log('payload:', req.body);
  }

  next();
};
