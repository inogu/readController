import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Controlador de leituras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bem-vindo ao Controlador de leitura!</h1>

        <div className={styles.grid}>
          <a href="/books" className={styles.card}>
            <h3>Livros &rarr;</h3>
            <p>Visualize a sua lista de leituras</p>
          </a>

        </div>
      </main>
    </div>
  );
}
