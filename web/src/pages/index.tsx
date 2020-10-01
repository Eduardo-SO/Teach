import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'

import {
  Container,
  Wrapper,
  Content,
  Hero,
  Apresentation,
  Description,
  Contact,
  Footer
} from '../styles/pages/Home'

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
          <Header toggleTheme={toggleTheme} />
          <Wrapper>
            <Content>
              <Apresentation>
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
              </Apresentation>
              <Hero>
                <img src="/images/hero1.svg" alt="Teach" />
              </Hero>
            </Content>

            <Content>
              <Hero>
                <img src="/images/hero2.svg" alt="Teach" />
              </Hero>
              <Description>
                <h2>Esteja pronto para o mundo</h2>
                <h3>
                  Além de fixar o aprendizado, o teste tem o objetivo de ajudar
                  a encontrar seu nível no inglês.
                </h3>
              </Description>
            </Content>

            <Content>
              <Contact>
                <h2>Caso tenha alguma dúvida</h2>
                <h3>Entre em contato conosco</h3>

                <ul>
                  <li>
                    <img src="/images/icons/mail.svg" alt="Teach" />
                    contato@teach.com.br
                  </li>
                  <li>
                    <img src="/images/icons/whatsapp.svg" alt="Teach" />
                    (12) 34567-8910
                  </li>
                </ul>
              </Contact>
              <Hero>
                <img src="/images/hero3.svg" alt="Teach" />
              </Hero>
            </Content>
          </Wrapper>
          <Footer>
            <div>
              <p>© 2020 Teach. Todos os direitos reservados. </p>
              <p>
                Desenvolvido pela <strong>One</strong>
              </p>
            </div>
          </Footer>
        </Container>
      </main>
    </>
  )
}

export default Home
