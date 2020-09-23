import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <Header />
        <h1>Hello world!</h1>
      </main>
    </div>
  )
}

export default Home
