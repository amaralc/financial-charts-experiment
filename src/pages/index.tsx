import { fetchData } from '@helpers/fetchData';
import Head from 'next/head';
import { useEffect, useState } from 'react';
// import Image from 'next/image' //-> can't use yarn export with next images
import styles from './home.module.scss';

export default function Home() {
  const [chartData, setChartData] = useState({})

  useEffect(async () => {

    const getData = async () => {
      const {data: thisData} = await fetchData('http://localhost:3000/api/finances/yahoo/v8/')
      return thisData
    }
    
    const data = await getData()
    setChartData(data)
  },[])

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
            {console.log(chartData)}
          </section>
        </main>
      </div>
    </>
  );
}
