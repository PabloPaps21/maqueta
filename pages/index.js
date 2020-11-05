import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar  from './components/navbarPage'
import Ofertas from './components/ofertas'
import Slide from './components/slide'
import Rap from './components/productos'
import Garantias from './components/garantias'
import Vendidos from './components/vendidos'
import Parners from './components/partners'
import Footer from './components/footer'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className={styles.vendidos}>
        <h2>Nuevos productos</h2>
      </div>
      <Rap />
      <Rap />
      <div className={styles.ver}>
        <h2>Ver más <FontAwesomeIcon icon={faArrowRight} style={{backgroundColor: 'none', color: '#013367', fontSize: '18' }}/></h2>
      </div>
      <Garantias />
      <div className={styles.vendidos}>
        <h2>Más vendidos</h2>
      </div>
      <Vendidos />
      <Vendidos />
      <div className={styles.ver}>
        <h2>Ver más <FontAwesomeIcon icon={faArrowRight} style={{backgroundColor: 'none', color: '#013367', fontSize: '18' }}/></h2>
      </div>
      <Parners />
      <Footer />
    </div>
  )
}
