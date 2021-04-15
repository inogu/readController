import Head from 'next/head';
import * as S from '../styles/styled';

export default function Home() {
  return (
    <S.Container>
      <Head>
        <title>Controlador de leituras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <S.Title>Bem-vindo ao Controlador de leitura!</S.Title>

        <div>
          <a href="/books">
            <h3>Livros &rarr;</h3>
            <p>Visualize a sua lista de leituras</p>
          </a>

        </div>
      </main>
    </S.Container>
  );
}
