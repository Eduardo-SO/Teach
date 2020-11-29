import styled from 'styled-components'

interface CheckProps {
  isChecked: boolean
}

export const Container = styled.button`
  display: flex;
  align-items: center;

  margin-bottom: 2.4rem;
  border: 0;

  background: transparent;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
  }
`

export const Check = styled.div<CheckProps>`
  height: 1.6rem;
  width: 1.2rem;

  margin-right: 1.6rem;

  border-radius: 4px;

  background: ${props =>
    props.isChecked
      ? props.theme.colors.text.contrast
      : props.theme.colors.text.secondary};
`

export const AnswerContainer = styled.div``
