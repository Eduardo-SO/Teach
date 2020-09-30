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
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 144rem;
  padding: 8rem 8rem 0;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`

export const Apresentation = styled.div`
  flex: 2;
`

export const Content = styled.div`
  max-width: 320px;

  h2 {
    font-size: 6.4rem;
    margin-bottom: 1.6rem;
  }

  h3 {
    color: ${props => props.theme.colors.text.contrast};
    font-size: 2.4rem;
    font-weight: 400;

    margin-bottom: 2.4rem;
  }

  ul {
    list-style: none;
    margin-bottom: 4rem;

    strong {
      color: ${props => props.theme.colors.text.contrast};
      font-size: 2.4rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 4.5rem;
      padding: 0 1.6rem;
      border: 1px solid ${props => props.theme.colors.text.contrast};

      background: ${props => props.theme.colors.background.primary};
    }

    button {
      height: 4.5rem;
      border: none;
      border-radius: 0 0 8px 8px;

      background: ${props => props.theme.colors.text.contrast};
      color: #cfd7dc;

      font-weight: 600;
    }

    input:nth-child(1) {
      border-radius: 8px 8px 0 0;
      margin-bottom: -0.1rem;
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
    display: hidden;
  }

  @media (min-width: 700px) {
    img {
      display: block;
      height: 75%;
    }
  }
`
