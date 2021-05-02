import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { TextField, InputLabel, Select, MenuItem } from "@material-ui/core";
import * as S from "../../../styles/styled";
import Button from "../../../components/ui/button/button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { sendAnnotationData } from "../../../helpers/annotations.service";
import { useAlert } from "react-alert";
import { useRouter } from "next/router";
import { getAllBooks } from "../../../helpers/books.service";
import { IBook } from "../../../types/Books";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 420,
    },
    select: {
      width: 200,
    },
  })
);

function NewAnnotationPage() {
  const [enteredLivro, setEnteredLivro] = useState(0);
  const [enteredAnotacao, setEnteredAnotacao] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const [requestError, setRequestError] = useState();
  const [books, setBooks] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  const alert = useAlert();

  const router = useRouter();

  const styles = useStyles();

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

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const insertAnnotation = async (event) => {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendAnnotationData({
        _id: undefined,
        livro_id: enteredLivro,
        anotacao: enteredAnotacao,
      });
      setRequestStatus("success");
      alert.show("Anotação inserida com sucesso!");
      setEnteredLivro(0);
      setEnteredAnotacao("");
      router.push("/annotations");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    if (!!event.target) setEnteredLivro(event.target.value as number);
  };

  return (
    <Fragment>
      <Head>
        <title>Nova Anotação</title>
        <meta
          name="description"
          content="Escolha o livro e insira nova anotação!"
        />
      </Head>
      <S.Container>
        <S.FormContainer>
          <form className={styles.formControl} onSubmit={insertAnnotation}>
            <S.SubTitle>Nova Anotação</S.SubTitle>
            <br />
            <br />
            <S.Row>
              <TextField
                className={styles.select}
                select
                label="Livro"
                type="text"
                id="nome"
                value={enteredLivro}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              >
                {books.map((book: IBook) => (
                  <MenuItem key={book._id} value={book._id}>
                    {book.nome}
                  </MenuItem>
                ))}
              </TextField>
            </S.Row>
            <br />
            <S.Row>
              <TextField
                multiline={true}
                rows={3}
                label="Anotação"
                id="anotacao"
                value={enteredAnotacao}
                onChange={(event) => setEnteredAnotacao(event.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </S.Row>
            <br />
            <S.Footer>
              <Button>Inserir</Button>
            </S.Footer>
          </form>
        </S.FormContainer>
      </S.Container>
    </Fragment>
  );
}

export default NewAnnotationPage;
