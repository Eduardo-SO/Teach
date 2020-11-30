import React, { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import api from '../services/api'
import { useTest } from '../context/test'

import Header from '../components/Header'

import {
  Container,
  Wrapper,
  Content,
  SendMailButton,
  GoHomeButton,
  CompletedTest,
  Hero
} from '../styles/pages/Result'

interface Props {
  toggleTheme(): void
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  const [level, setLevel] = useState('')

  const route = useRouter()
  const { test, setTest } = useTest()

  useEffect(() => {
    if (!test.grade) {
      route.push('/')
    }

    if (test.grade <= 3) {
      setLevel('iniciante')
    }

    if (test.grade >= 4 && test.grade <= 6) {
      setLevel('intermediário')
    }

    if (test.grade >= 7) {
      setLevel('avançado')
    }
  }, [])

  const handleSendMail = useCallback(async () => {
    await api.post('/tests/send-result', {
      to: test.student_email,
      name: test.student_name,
      body: `Obrigado por realizar nosso teste! Sua nota na prova foi ${test.grade}, você está no nivel ${level}!`
    })
  }, [level])

  const handleGoHome = useCallback(() => {
    setTest({
      id: '',
      questions: '',
      student_id: '',
      student_name: '',
      student_email: '',
      grade: 0
    })

    route.push('/')
  }, [])

  return (
    <>
      <Head>
        <title>Resultado</title>
      </Head>

      <main>
        <Container className=".container">
          <Header logo toggleTheme={toggleTheme} />
          <Wrapper>
            <Content>
              <CompletedTest>
                <h1>Teste concluído</h1>

                <h2>
                  Sua nota final é <strong>{test.grade}</strong>
                </h2>

                <p>
                  Você está no nivel <strong>{level}</strong>
                </p>

                <SendMailButton onClick={() => handleSendMail()}>
                  Receber nota no email
                </SendMailButton>

                <GoHomeButton onClick={() => handleGoHome()}>
                  Voltar para home
                </GoHomeButton>
              </CompletedTest>

              <Hero>
                <img src="/images/hero4.svg" alt="Teach" />
              </Hero>
            </Content>
          </Wrapper>
        </Container>
      </main>
    </>
  )
}

export default Home
