import Head from 'next/head'

import Layout from '../components/Layout'
import Card from '../components/Card'
import Nav from '../components/Nav'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kayra</title>
        <meta name="description" content="Home Website for Kayra"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Layout>
          <Nav></Nav>
          <Card></Card>
        </Layout>
      </main>
    </div>
  )
}