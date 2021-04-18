import { IBook } from '../../types/Books';
import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from '../../helpers/db-utils';

async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    return;
  }

  if (req.method === 'POST') {
    const book: IBook = req.body;

    let result;

    try {
      result = await insertDocument(client, 'books', book);
      book._id = result.insertedId;
      res.status(201).json({ message: 'Livro inserido', book: book });
    } catch (error) {
      res.status(500).json({ message: `Falha na inserção do livro! ${error}` });
    }

    res.status(201).json({ message: 'Livro inserido com sucesso!' });
  } else if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'books', { _id: -1 });
      res.status(200).json({ books: documents });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Falha na busca dos livros cadastrados.' });
    }
  }
  client.close();
}

export default handler;
