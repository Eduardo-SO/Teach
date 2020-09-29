import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 8rem;
  padding: 0 8rem;
  margin-bottom: -8rem;

  h1 {
    background: ${props => props.theme.colors.background.gradient};

    text-shadow: none;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
