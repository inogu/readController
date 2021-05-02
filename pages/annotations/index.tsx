import { useEffect, useState } from "react";
import AnnotationList from "../../components/annotation-list/annotation-list";
import Button from "../../components/ui/button/button";
import * as S from "../../styles/styled";
import { IAnnotation } from "../../types/Annotations";
import { getAllAnnotations } from "../../helpers/annotations.service";
import { getAllBooks } from "../../helpers/books.service";
import { IBook } from "../../types/Books";

function HomePage(props) {
  const [annotations, setAnnotations] = useState([]);
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
        debugger;
        setLoadedData(true);
      }
    };
    if (!loadedData) {
      buscarLivros();
    }
  }, [loadedData]);

  useEffect(() => {
    const buscarAnotacoes = async () => {
      const response = await getAllAnnotations();
      if (response) {
        debugger;
        const annotations: IAnnotation[] = response.map((annotation) => ({
          ...annotation,
          id: annotation._id,
          nomeLivro: books.find((b) => b._id === annotation.livro_id).nome,
        }));
        setAnnotations(annotations);
        setLoadedData(true);
      }
    };
    if (books.length > 0) {
      buscarAnotacoes();
    }
  }, [books]);

  return (
    <S.Container>
      <S.Title>Anotações</S.Title>
      <AnnotationList items={annotations} />
      <S.Footer>
        <Button primary link={"/annotations/new-annotation"}>
          INSERIR NOVA ANOTAÇÂO
        </Button>
      </S.Footer>
    </S.Container>
  );
}

export default HomePage;
