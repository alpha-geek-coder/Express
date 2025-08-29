import { Router } from 'express'
import * as bookController from '../controllers/bookController.js'

export const bookRouter = Router();

// GET /books
bookRouter.get("/", bookController.getAllBooks);

// GET /books/:bookId (:bookId is route-parameter)
bookRouter.get("/:bookId", bookController.getBookById);

// GET /books/:bookId/reserve
bookRouter.get("/:bookId/reserve", bookController.getReservedBookById);

// POST /books/:bookId/reserve
bookRouter.post("/:bookId/reserve", bookController.reserveBook);