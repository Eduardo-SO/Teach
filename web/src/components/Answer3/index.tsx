import React from 'react'

import { Container, Checkbox } from './styles'

interface AnswerProps {
  checkId: string
}

const Answer: React.FC<AnswerProps> = ({ checkId, children }) => {
  return (
    <Container>
      <Checkbox>
        <input type="checkbox" id={checkId} hidden />
        <label id="checkmark" />

        <label htmlFor={checkId}>{children}</label>
      </Checkbox>
    </Container>
  )
}

export default Answer
