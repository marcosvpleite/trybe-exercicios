import { Request, Response } from "express";
import BookService from "../services/books.service";
import statusCodes from "../statusCodes";

class BooksController {
  constructor(private bookService = new BookService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(statusCodes.ok).json(books);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const book = await this.bookService.getById(id);

    if (!book) {
      return res
        .status(statusCodes.NOT_FOUND)
        .json({ message: "Book not found!" });
    }

    res.status(statusCodes.ok).json(book);
  };
  public create = async (req: Request, res: Response) => {
    const book = req.body;

    const bookCreated = await this.bookService.create(book);
    res.status(statusCodes.CREATED).json(bookCreated);
  };
}

export default BooksController;
