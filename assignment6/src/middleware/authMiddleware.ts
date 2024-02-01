import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../config/db";
import { Books } from "../entities/Book";

interface AuthorizedRequest extends Request {
  user?: { user_id: number };
}

export const authorizeBookAuthor = async (
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user?.user_id;

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const bookId = req.params.id;
  try {
    const book = await AppDataSource.manager.findOne(Books, {
      where: { id: parseInt(bookId) },
    });
    if (!book || book.authorId !== userId) {
      return res.status(403).json({ error: "Forbidden" });
    }
    next();
  } 
  catch (error) {
    console.error("Error authorizing user", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const authorizeUserByIdParam = (
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
) => {
  const userIdParam = req.params.userId;
  const userId = req.user?.user_id;

  if (!userId || userId !== parseInt(userIdParam)) {
    return res.status(403).json({ error: "Forbidden" });
  }

  next();
};
