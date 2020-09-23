import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80px;

  background: ${props => props.theme.colors.background_tertiary};
  color: ${props => props.theme.colors.text_secondary};
`
