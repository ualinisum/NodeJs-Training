import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export class Protection{
  async protect(req: Request, res: Response, next: NextFunction){
    let token, decode;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
      token = req.headers.authorization.split(' ')[1];
    }

    if(!token){
      return next('You are not logged in. Log in to get access!');
    }

    jwt.verify(token, process.env.JWT_SECRET || '', (err, decoded) => {
      decode = decoded;
    });

    next
  }
}