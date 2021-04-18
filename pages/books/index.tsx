import { useEffect, useState } from 'react';
import BookList from '../../components/book-list/book-list';
import Button from '../../components/ui/button/button';
import * as S from '../../styles/styled';
import { IBook } from '../../types/Books';
import { getAllBooks } from './service/books.service';

function HomePage(props) {
  const [books, setBooks] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    const buscarLivros = async () => {
      const response = await getAllBooks();
      if (response) {
        const books: IBook[] = response.map((book) => ({
          ...book,
          id: book._id,
        }));
        setBooks(books);
        setLoadedData(true);
      }
    };
    if (!loadedData) buscarLivros();
  }, [loadedData]);

  return (
    <S.Container>
      <S.Title>Livros lidos</S.Title>
      <BookList items={books} />
      <S.Footer>
        <Button primary link={'/books/new-book'}>
          INSERIR NOVO LIVRO
        </Button>
      </S.Footer>
    </S.Container>
  );
}

export default HomePage;
