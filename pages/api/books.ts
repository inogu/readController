import { MongoClient } from 'mongodb';
import { IBook } from '../../types/Books';

async function handler(req, res) {
  if (req.method === 'POST') {
    const book: IBook = req.body;

    let client;

    try {
      client = await MongoClient.connect(
        'mongodb+srv://inogu:eFUFZtFgpDFqBxc0@cluster0.v5gnb.mongodb.net/readController?retryWrites=true&w=majority'
      );
    } catch (error) {
      res.status(500).json({ message: `Could not connect to database. ${error} `});
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('books').insertOne(book);
      //book.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res.status(201).json({ message: 'Livro inserido com sucesso!' });
  }
}

export default handler;
