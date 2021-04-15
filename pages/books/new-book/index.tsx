import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import ImageBooks from '../../../components/layout/ImageBooks';
import Input from '../../../components/ui/input/input';
import TextArea from '../../../components/ui/textArea/textArea';
import { IBook } from '../../../types/Books';
import * as S from '../../../styles/styled';
import Button from '../../../components/ui/button/button';

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
        <form onSubmit={insertBook}>
          <S.Title>Insira um novo livro!</S.Title>
          <div>
            <S.Label>NOME</S.Label>
          </div>
          <div>
            <Input
              type="text"
              id="nome"
              value={enteredNome}
              onChange={(event) => setEnteredNome(event.target.value)}
              size="1em"
            />
          </div>
          <br />
          <div>
            <S.Label>AUTOR</S.Label>
          </div>
          <div>
            <Input
              type="text"
              id="autor"
              value={enteredAutor}
              onChange={(event) => setEnteredAutor(event.target.value)}
              size="1em"
            />
          </div>
          <div>
            <S.Label>GENERO</S.Label>
          </div>
          <div>
            <Input
              type="text"
              id="genero"
              value={enteredGenero}
              onChange={(event) => setEnteredGenero(event.target.value)}
              size="1em"
            />
          </div>
          <div>
            <S.Label>AVALIAÇÃO</S.Label>
          </div>
          <div>
            <TextArea
              type="text"
              id="genero"
              value={enteredAvaliacao}
              onChange={(event) => setEnteredAvaliacao(event.target.value)}
              size="1em"
            />
          </div>
          <div>
            <S.Label>DATA DA LEITURA</S.Label>
          </div>
          <div>
            <Input
              type="date"
              id="dataLeitura"
              value={enteredDataLeitura}
              onChange={(event) => setEnteredDataLeitura(event.target.value)}
              size="1em"
            />
          </div>
          <div>
            <S.Label>NÚMERO DE PÁGINAS</S.Label>
          </div>
          <div>
            <Input
              type="number"
              id="numeroPaginas"
              value={enteredNumeroPaginas}
              onChange={(event) => setEnteredNumeroPaginas(event.target.value)}
              size="1em"
            />
          </div>
          <br />
          <div>
            <Button>Inserir</Button>
          </div>
        </form>
      </S.Container>
    </Fragment>
  );
}

export default NewBookPage;
