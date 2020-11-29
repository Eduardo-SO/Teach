import React, { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useTest } from '../context/test'

import Header from '../components/Header'

import {
  Container,
  Wrapper,
  Content,
  GoHomeButton
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
    } else if (test.grade <= 3) {
      return setLevel('iniciante')
    } else if (test.grade <= 7) {
      return setLevel('intermediário')
    }
    return setLevel('avançado')
  }, [])

  const handleGoHome = useCallback(() => {
    setTest({
      id: '',
      questions: '',
      student_id: '',
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
              <h1>Teste concluído</h1>

              <h2>
                Sua nota final é <strong>{test.grade}</strong>
              </h2>

              <p>
                Você está no nivel <strong>{level}</strong>
              </p>

              <GoHomeButton onClick={handleGoHome}>
                Voltar para home
              </GoHomeButton>
            </Content>
          </Wrapper>
        </Container>
      </main>
    </>
  )
}

export default Home
