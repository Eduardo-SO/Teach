import React, { useCallback, useState } from 'react'

import {
  Container,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon
} from './styles'

interface AnswerProps {
  className: string
  handleCheck: boolean
}

const Answer: React.FC<AnswerProps> = ({
  children,
  handleCheck,
  className,
  ...props
}) => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = useCallback(e => {
    setChecked(!checked)
  }, [])

  return (
    <Container>
      <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      {children}
    </Container>
  )
}

export default Answer
