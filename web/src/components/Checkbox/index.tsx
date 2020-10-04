import React from 'react'

import { Container } from './styles'

const Checkbox: React.FC = ({ children }) => {
  return (
    <Container>
      <input type="checkbox" id="check" hidden />
      <label htmlFor="check" id="checkmark" />
      <label htmlFor="check">{children}</label>
    </Container>
  )
}

export default Checkbox
