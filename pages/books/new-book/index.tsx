import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import ImageBooks from '../../../components/layout/ImageBooks';
import { TextField } from '@material-ui/core';
import { IBook } from '../../../types/Books';
import * as S from '../../../styles/styled';
import Button from '../../../components/ui/button/button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '40ch',
      },
    },
  }),
);

async function sendBookData(bookDetails: IBook) {
  console.log('Entrou no sendBookData');
  const response = await fetch('/api/books', {
    method: 'POST',
    body: JSON.stringify(bookDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

function NewBookPage() {
  const [enteredNome, setEnteredNome] = useState('');
  const [enteredAutor, setEnteredAutor] = useState('');
  const [enteredGenero, setEnteredGenero] = useState('');
  const [enteredAvaliacao, setEnteredAvaliacao] = useState('');
  const [enteredDataLeitura, setEnteredDataLeitura] = useState('');
  const [enteredNumeroPaginas, setEnteredNumeroPaginas] = useState(0);
  const [requestStatus, setRequestStatus] = useState('');
  const [requestError, setRequestError] = useState();

  const styles = useStyles();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const insertBook = async (event) => {
    event.preventDefault();

    setRequestStatus('pending');

    console.log('Entrou no insert book');

    try {
      await sendBookData({
        nome: enteredNome,
        autor: enteredAutor,
        genero: enteredGenero,
        avaliacao: enteredAvaliacao,
        dataLeitura: new Date(enteredDataLeitura),
        foto: '',
        numeroPaginas: enteredNumeroPaginas,
      });
      setRequestStatus('success');
      setEnteredNome('');
      setEnteredAutor('');
      setEnteredGenero('');
      setEnteredAvaliacao('');
      setEnteredDataLeitura('');
      setEnteredNumeroPaginas(0);
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Novo Livro</title>
        <meta name="description" content="Insira novo livro!" />
      </Head>
      <S.Container>
        <form className={styles.root} onSubmit={insertBook}>
          <S.Title>Novo livro</S.Title>
          <S.Row>
            <TextField
              label="Nome"
              type="text"
              id="nome"
              value={enteredNome}
              onChange={(event) => setEnteredNome(event.target.value)}
            />
            <TextField
              label="Autor"
              type="text"
              id="autor"
              value={enteredAutor}
              onChange={(event) => setEnteredAutor(event.target.value)}
            />
            <TextField
              label="Gênero"
              type="text"
              id="genero"
              value={enteredGenero}
              onChange={(event) => setEnteredGenero(event.target.value)}
            />
          </S.Row>
          <S.Row>
            <TextField
              label="Data da leitura"
              type="date"
              id="dataLeitura"
              value={enteredDataLeitura}
              onChange={(event) => setEnteredDataLeitura(event.target.value)}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Número de páginas"
              type="number"
              id="numeroPaginas"
              value={enteredNumeroPaginas}
              onChange={(event) =>
                setEnteredNumeroPaginas(parseInt(event.currentTarget.value))
              }
            />
            <TextField
              label="Avaliação"
              type="text"
              id="avaliacao"
              value={enteredAvaliacao}
              onChange={(event) => setEnteredAvaliacao(event.target.value)}
            />
          </S.Row>
          <br />
          <S.Footer>
            <Button>Inserir</Button>
          </S.Footer>
        </form>
      </S.Container>
    </Fragment>
  );
}

export default NewBookPage;
