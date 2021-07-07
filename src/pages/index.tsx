import Head from 'next/head';
// import Image from 'next/image' //-> can't use yarn export with next images
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Financial Charts</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className={styles.contentContainer}>
        <main>
          <section>
            <h1>Chart Here!</h1>
          </section>
        </main>
      </div>
    </>
  );
}
