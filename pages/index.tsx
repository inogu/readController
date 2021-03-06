import Head from "next/head";
import Button from "../components/ui/button/button";
import * as S from "../styles/styled";

export default function Home() {
  return (
    <S.Container>
      <Head>
        <title>Controlador de leituras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <S.Title>Bem-vindo ao Controlador de leituras!</S.Title>

        <S.Grid>
          <S.Card>
            <a href="/books">
              <h3>Livros &rarr;</h3>
              <p>Visualize a sua lista de leituras</p>
            </a>
          </S.Card>
          <S.Card>
            <a href="/annotations">
              <h3>Anotações &rarr;</h3>
              <p>Visualize a sua lista de anotações</p>
            </a>
          </S.Card>
        </S.Grid>
      </main>
    </S.Container>
  );
}
