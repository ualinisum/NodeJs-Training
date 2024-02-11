import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { user } from "../model/users";

export class User {
  async signUp(req: Request, res: Response){
    try{
      const { user, email, password } = req.body;

      const pass = await bcrypt.hash(password, 12);

      await user.create({user, email, password: pass});

      res.status(200).json({data: 'User created succussfuly.'});
    }
    catch(error){
      res.status(400).json({error});
    }
  }

  async login(req: Request, res: Response, next: NextFunction){
    try{
      const { email, password } = req.body;

      if(!email || !password){
        next('Please provide email or passowrd');
      }

      const doc = await user.findOne({email}).select('+password');
      
      if(!user || !(await bcrypt.compare(password, doc.password))){
        next('Incorrect email or password.');
      }

      const token = jwt.sign({id: doc._id}, process.env.JWT_SECRET || '', {
        expiresIn: process.env.JWT_SECRET
      });

      res.status(200).json({
        token
      });
    }
    catch(error){
      res.status(400).json({error});
    }
  }
}