import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  background-image: url('images/background.svg');
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 55% auto;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: 100%;
  max-width: 1440px;
`

export const Apresentation = styled.div`
  flex: 2;
`

export const Content = styled.div`
  max-width: 320px;

  h2 {
    font-size: 64px;
    margin-bottom: 16px;
  }

  h3 {
    color: ${props => props.theme.colors.text.contrast};
    font-size: 24px;
    font-weight: 400;

    margin-bottom: 24px;
  }

  ul {
    list-style: none;
    margin-bottom: 40px;

    strong {
      color: ${props => props.theme.colors.text.contrast};
      font-size: 24px;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 45px;
      padding: 0 16px;
      border: 1px solid ${props => props.theme.colors.text.contrast};

      background: ${props => props.theme.colors.background.primary};
    }

    button {
      height: 45px;
      border: none;
      border-radius: 0 0 8px 8px;

      background: ${props => props.theme.colors.text.contrast};
      color: #cfd7dc;

      font-weight: 600;
    }

    input:nth-child(1) {
      border-radius: 8px 8px 0 0;
      margin-bottom: -1px;
    }
  }
`

export const Hero = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;

  img {
    height: 75%;
  }
`
