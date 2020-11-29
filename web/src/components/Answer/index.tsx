import React, { useState } from 'react'

import { Container, Check } from './styles'

const Answer: React.FC = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Container onClick={() => setIsChecked(!isChecked)}>
      <Check isChecked={isChecked} />

      {children}
    </Container>
  )
}

export default Answer
