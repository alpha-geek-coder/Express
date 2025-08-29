import { Router } from 'express'
import {CustomNotFoundError} from '../errors/CustomNotFoundError.js'

export const indexRouter = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];

indexRouter.get('/{index.html}', (req, res) => {
    res.render("index", { message: "EJS rocks!" , links, users});
})

// Catch all get where path within {} is optional, any splat/wildcard * must have a name e.g. *splat or *name etc...
indexRouter.get("/{*splat}", (req, res, next) => {
  next(
    new CustomNotFoundError(
      "/{*splat} is a great way to catch all otherwise unmatched paths, e.g. for custom 404 error handling."
    )
  );
});
    