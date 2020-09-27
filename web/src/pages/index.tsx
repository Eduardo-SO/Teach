import React from 'react'
import Head from 'next/head'

import {
  Container,
  Wrapper,
  Apresentation,
  Content,
  Hero
} from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <Container>
          <Wrapper>
            <Apresentation>
              <Content>
                <h2>Teach</h2>
                <h3>Teste seu inglês de maneira rápida e prática</h3>

                <ul>
                  <li>
                    <strong>1.</strong> Informe seu nome e e-mail
                  </li>
                  <li>
                    <strong>2.</strong> Faça o teste
                  </li>
                  <li>
                    <strong>3.</strong> Receba o resultado no e-mail
                  </li>
                </ul>

                <form>
                  <input required placeholder="Informe seu nome" />
                  <input
                    required
                    type="email"
                    placeholder="Informe seu e-mail"
                  />

                  <button>Iniciar</button>
                </form>
              </Content>
            </Apresentation>
            <Hero>
              <img src="/images/hero.svg" alt="Teach" />
            </Hero>
          </Wrapper>
        </Container>
      </main>
    </>
  )
}

export default Home
