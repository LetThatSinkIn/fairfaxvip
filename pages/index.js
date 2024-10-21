import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fairfax VIP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Fairfax VIP" />
        <p className="description">
          Welcome, page is currently <code>under construction</code>.
        </p>
      </main>

      <Footer />
    </div>
  )
}
