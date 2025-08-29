import { Router } from 'express';
import { getAllAuthors, getAuthorById } from "../controllers/authorController.js";

export const authorRouter = Router();

// GET /authors
authorRouter.get('/', getAllAuthors)

// GET /authors/:authorId
authorRouter.get('/:authorId', getAuthorById)