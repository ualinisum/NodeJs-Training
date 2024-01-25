import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { Books } from "../entities/Book";

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await AppDataSource.manager.find(Books);
    res.json(books);
  } catch (error) {
    console.error("Error getting books", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addBook = async (req: Request, res: Response) => {
  const body = req.body;

  const data = await AppDataSource.createQueryBuilder()
    .insert()
    .into(Books)
    .values([
      {
        title: body.title,
        author: body.author,
        price: body.price,
        quantity_available: body.quantity_available,
      },
    ])
    .execute();

  res.json({ message: "Book added successfully", data });
  try {
  } catch (error) {
    console.log("Error adding book:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await AppDataSource.createQueryBuilder()
    .delete()
    .from(Books)
    .where("id = :id", { id })
    .execute();

  res.json({ message: "Book Deleted successfully", data });
  try {
  } catch (error) {
    console.log("Error Deleting book:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateBook = async (req: Request, res: Response) => {
  const body = req.body;

  const data = await AppDataSource.createQueryBuilder()
    .update(Books)
    .set({ ...body })
    .where("id = :id", { id: 1 })
    .execute();

  res.json({ message: "Book Deleted successfully", data });
  try {
  } catch (error) {
    console.log("Error Deleting book:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default {
  getAllBooks,
  addBook,
  deleteBook,
  updateBook,
};
