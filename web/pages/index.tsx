import React from 'react'
import Head from 'next/head'

 const Home:React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello world!</h1>
      </main>
    </div>
  )
}

export default Home;
