import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { authorRouter } from './routes/authorRouter.js';
import { bookRouter } from './routes/bookRouter.js';
import { indexRouter } from './routes/indexRouter.js';

// Step 1: Initialize app
const app = express();
dotenv.config();

app.set("views", path.join(process.cwd(), "..", "views"));
app.set('view engine', 'ejs');

app.use(express.static(path.join(process.cwd(), '..', 'public')));

// Step 2: Listen to port
const PORT = process.env.PORT_ENV || 3000;
app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Server started! listening on port ${PORT}`);
});

// Step 3: Define Routes
/*
GET /
GET /about
GET /contact
POST /contact

GET /books
GET /books/:bookId
GET /books/:bookId/reserve
POST /books/:bookId/reserve

GET /authors
GET /authors/:authorId

*/
app.use("/about", (req, res, next) => {
    // res.send('<p>About</p>');
    res.render('./partials/about');
});
app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use("/", indexRouter);

// Home Page
app.get('/{index.html}', (req, res) => {
    // res.download(
    //     "/Users/jadeed/Documents/repos/Node/exercises/resources/moby.md"
    //       , 'report.md', (err) => {
    //           if (err) {
    //               throw err
    //           }
    //           console.log('File sent');
    //       }
    //     );

    res.send('Hello, world!')
});

// Some miscellaneous routes 
/**
 * GET /odin/messages?sort=date&direction=ascending will log
 * Params: { username: "odin" }
 * Query: { sort: "date", direction: "ascending" }
 *
 * GET /odin/messages?sort=date&sort=likes&direction=ascending will log
 * Params: { username: "odin" }
 * Query: { sort: ["date", "likes"], direction: "ascending" }
 */
app.get("/:username/messages", (req, res) => {
    console.log("Params:", req.params);
    console.log("Query:", req.query);
    res.end();
});
  
// Global error handler middleware function
// Note: This function takes 4 parameters.
app.use((err, req, res, next) => {
    console.log('Inside catch all')
    console.log(err);
    res.status(err.statusCode || 500).send(err.message);
})
