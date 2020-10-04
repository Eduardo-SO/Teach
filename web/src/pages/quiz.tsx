import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'

import {
  Container,
  Wrapper,
  Content,
  Answer,
  Navigation
} from '../styles/pages/Quiz'
import Checkbox from '../components/Checkbox'

interface Props {
  toggleTheme(): void
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <Container>
          <Header logo toggleTheme={toggleTheme} />
          <Wrapper>
            <Content>
              <h1>1 de 10</h1>
              <p>
                Chicago, __________________, is in the Midwest, specifically in
                the state of Illinois.
              </p>

              <Answer>
                <Checkbox />
                where the American Medical Association is located
              </Answer>
              <Answer>
                <Checkbox />
                which the American Medical Association is located
              </Answer>
              <Answer>
                <Checkbox />
                the American Medical Association is located there
              </Answer>

              <Navigation>
                <button>Voltar</button>
                <button>Avançar</button>
              </Navigation>
            </Content>
          </Wrapper>
        </Container>
      </main>
    </>
  )
}

export default Home
