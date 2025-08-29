
export const getAllBooks = async (req, res) => {
  res.send("All books");
};

export const getBookById = async (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
};


export const getReservedBookById = async (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId} is in reserved status.`);
};

export const reserveBook = async (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId} is reserved.`);
};

