import BookList from '../../components/book-list/book-list';
import styled from 'styled-components';
import Button from '../../components/ui/button/button';
import * as S from '../../styles/styled';

function HomePage(props) {
  return (
    <S.Container>
      <S.Title>Livros lidos</S.Title>
      <BookList items={props.books} />

      <S.Grid>
        <S.Card />
        <S.Card />
        <S.Card />
        <S.Card />
      </S.Grid>
      <S.Footer>
        <Button primary link={'/books/new-book'}>
          INSERIR NOVO LIVRO
        </Button>
      </S.Footer>
    </S.Container>
  );
}

export async function getStaticProps() {
  const books = [];

  return {
    props: {
      books: books,
    },
    revalidate: 1800,
  };
}

export default HomePage;
