import Head from 'next/head';
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div className='page-container'>
     <Head>
        <title>Next Js News App</title>
      </Head>

    <Navbar />

     <div className={styles.main}>
        <h1>Welcome to News App(Next Js)</h1>
        <h3>Click on Feed for news articles</h3>
     </div>
   </div>
  )
}
