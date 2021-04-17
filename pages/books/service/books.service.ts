import axios from 'axios';
import { IBook } from '../../../types/Books';

const urlBooks = axios.create({
  baseURL: `/api/books`,
});

export const sendBookData = async (bookDetails: IBook) => {
  const response = await urlBooks.post('', JSON.stringify(bookDetails));

  const data = await response.data;

  if (!response.status) {
    throw new Error(data.message || 'Something went wrong!');
  }
};

export const getAllBooks = async () => {
  const response = await urlBooks.get('');
  return response.data.books;
};
