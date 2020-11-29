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
  Navigation,
  Answer,
  Check
} from '../styles/pages/Test'

interface Props {
  toggleTheme(): void
}

interface Answer {
  text: string
  selected: boolean
}

interface Question {
  id: string
  question: string
  answers: Answer[]
  correct_answer: string
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  const [questions, setQuestions] = useState<Question[]>()
  const [currentQuestion, setCurrentQuestion] = useState(1)

  const route = useRouter()
  const { test, setTest } = useTest()

  useEffect(() => {
    async function loadQuestions() {
      if (!test.questions) {
        return route.push('/')
      }

      const response = await api.post('/tests/questions', {
        questions_id: test.questions
      })

      const loadedQuestions = response.data

      const formattedQuestiond = loadedQuestions.map(loadedQuestion => ({
        id: loadedQuestion.id,
        question: loadedQuestion.question,
        answers: loadedQuestion.answers.split(', ').map(answer => ({
          text: answer,
          selected: false
        })),
        correct_answer: loadedQuestion.correct_answer
      }))

      setQuestions(formattedQuestiond)
    }

    loadQuestions()
  }, [])

  const handleCheckAnswer = useCallback(
    (selected_answer, questionId) => {
      setQuestions(
        questions.map(question => {
          if (question.id === questionId) {
            question.answers.map(answer => {
              if (answer.text !== selected_answer) {
                answer.selected = false
              }

              if (answer.text === selected_answer) {
                answer.selected = !answer.selected
              }
            })
          }
          return question
        })
      )
    },
    [questions]
  )

  const handlePreviousQuestion = useCallback(() => {
    setCurrentQuestion(currentQuestion - 1)
  }, [currentQuestion])

  const handleNextQuestion = useCallback(() => {
    setCurrentQuestion(currentQuestion + 1)
  }, [currentQuestion])

  const handleSendTest = useCallback(() => {
    let grade = 0
    questions.map(question => {
      question.answers.map(answer => {
        if (answer.selected && answer.text !== question.correct_answer) {
          // console.log('0', grade, answer.text, question.correct_answer)
          return
        }

        if (answer.selected && answer.text === question.correct_answer) {
          grade = grade + 1
          // console.log('+1', grade, answer.text, question.correct_answer)
        }
      })
    })

    setTest({
      ...test,
      grade
    })

    route.push('/result')
  }, [questions, test])

  return (
    <>
      <Head>
        <title>Teste</title>
      </Head>

      <main>
        <Container className=".container">
          <Header logo toggleTheme={toggleTheme} />
          <Wrapper>
            <Content>
              <h1>{currentQuestion} de 10</h1>

              {questions ? (
                <div key={questions[currentQuestion - 1].id}>
                  <p>{questions[currentQuestion - 1].question}</p>

                  {questions[currentQuestion - 1].answers.map(answer => (
                    <Answer
                      key={answer.text}
                      onClick={() =>
                        handleCheckAnswer(
                          answer.text,
                          questions[currentQuestion - 1].id
                        )
                      }
                    >
                      <Check isChecked={answer.selected} />

                      {answer.text}
                    </Answer>
                  ))}
                </div>
              ) : (
                <h1>Carregando</h1>
              )}

              <Navigation>
                {currentQuestion > 1 ? (
                  <button onClick={handlePreviousQuestion}>Voltar</button>
                ) : null}

                {currentQuestion < 10 ? (
                  <button onClick={handleNextQuestion}>Avançar</button>
                ) : (
                  <button onClick={handleSendTest}>Enviar</button>
                )}
              </Navigation>
            </Content>
          </Wrapper>
        </Container>
      </main>
    </>
  )
}

export default Home
