import Head from 'next/head';
// import Image from 'next/image' //-> can't use yarn export with next images
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Peerlab</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className={styles.contentContainer}>
        <main>
          <section>
            <img src="/images/peerlab-icon.svg" alt="Peerlab" width={300} height={300} />
          </section>
        </main>
        <footer>
          Powered by
          <span>
            <a href="https://www.peerlab.com.br" target="_blank" rel="noreferrer">
              <img src="/images/peerlab-logo.svg" alt="Peerlab" width={100} height={15} />
            </a>
          </span>
        </footer>
      </div>
    </>
  );
}
