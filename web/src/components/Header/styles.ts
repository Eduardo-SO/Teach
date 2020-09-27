import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  padding: 0 80px;
  margin-bottom: -80px;

  h1 {
    background: ${props => props.theme.colors.background.gradient};

    text-shadow: none;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
