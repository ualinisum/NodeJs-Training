import { Request, Response, NextFunction } from 'express';

export const checkPermission = (request: Request, responce: Response, nextFunc: NextFunction) => {
  const userId = request.headers['user-id'];

  if (!userId) {
    responce.status(403).json({ error: 'User ID is required for this operation' });
  } else {
    nextFunc();
  }
};
