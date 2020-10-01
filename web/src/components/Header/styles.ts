import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 8rem;
  width: 100%;
  margin-bottom: -8rem;

  padding: 0 4rem;

  @media (min-width: 980px) {
    padding: 0 8rem;
  }

  h1 {
    background: ${props => props.theme.colors.background.gradient};

    text-shadow: none;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
