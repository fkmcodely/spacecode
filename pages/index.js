import Head from 'next/head'
import Image from 'next/image'
import SpaceNav from '../components/SpaceNav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>INICIO | SpaceCode</title>
        <meta name="description" content="SpaceCode es una agencia de publicidad especializada en el diseño de logotipos originales, páginas web e identidades corporativas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SpaceNav />
    </div>
  )
}
