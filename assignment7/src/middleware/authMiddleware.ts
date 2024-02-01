import { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    username: string;
    isAdmin: boolean;
  };
};

const authorizeUser = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Unauthorized User" });
  }
};

export { authorizeUser };
