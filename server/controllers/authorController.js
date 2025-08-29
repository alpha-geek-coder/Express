import * as db from "../db.js";
import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";

export const getAllAuthors = async (req, res) => {
  try {
    const result = await db.getAllAuthors();
    res.send(result);
  } catch (err) {
      console.error("Error - getAllAuthors", err.message);
      res.status(500).send("Internal Server Error");
  }
};

export const getAuthorById = async (req, res, next) => {
  const { authorId } = req.params;
  // Express will auto-catch any thrown errors in the async middleware function
  
  // try {
  const author = await db.getAuthorById(Number(authorId));
  if (!author) {
    // res.status(404).send("Author not found");
    // return;
    throw new CustomNotFoundError("Author not found");
  }

  res.send(`Author name: ${author.name}`);
  // } catch (err) {
  //     console.error("Error - getAllAuthors", err.message);
  //     res.status(500).send("Internal Server Error");
  // }
};
