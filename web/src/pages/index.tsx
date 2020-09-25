import React from 'react'
import Head from 'next/head'

import { Container, Wrapper, Apresentation, Hero } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <Container>
          <Wrapper>
            <Apresentation>
              <h1>Hello world!</h1>
            </Apresentation>
            <Hero />
          </Wrapper>
        </Container>
      </main>
    </div>
  )
}

export default Home
