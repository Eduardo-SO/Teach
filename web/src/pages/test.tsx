import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import api from '../services/api'
import { useTest } from '../context/test'

import Header from '../components/Header'

import {
  Container,
  Wrapper,
  Content,
  Answer,
  Navigation
} from '../styles/pages/Quiz'
import Checkbox from '../components/Checkbox'

interface Question {
  id: string
  question: string
  answers: string
  correct_answer: string
}

interface Props {
  toggleTheme(): void
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  const [questions, setQuestions] = useState<Question[]>()

  const { test } = useTest()
  useEffect(() => {
    async function loadQuestions() {
      const loadedQuestions = await api.post('/tests/questions', {
        questions_id: test.questions
      })

      console.log(loadedQuestions.data)

      setQuestions(loadedQuestions.data)
    }

    loadQuestions()

    console.log(questions)
  }, [])

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

              {/* {questions.map(question => (
                <p key={question.id}>{question.question}</p>
              ))} */}

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
