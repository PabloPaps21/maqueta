import Head from 'next/head'
import styles from '../styles/Home.module.css'
import    Navbar  from './components/navbarPage'
import Ofertas from './components/ofertas'
import Slide from './components/slide'
import Rap from './components/productos'
import Garantias from './components/garantias'
import Parners from './components/partners'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maqueta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar />
      <Ofertas />
      <Slide />
      <p style={{color: "red"}}>Nuevos Productos</p>
      <Rap />
      <Rap />
      <p style={{color: "red"}}> ver más  </p>
      <Garantias />
      <p style={{color: "red"}}> Más vendidos</p>
      <Rap />
      <Rap />
      <p style={{color: "red"}}> ver más  </p>
      <Parners />

      <main className={styles.main}>
      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
