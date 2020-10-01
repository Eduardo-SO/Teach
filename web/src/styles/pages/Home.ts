import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  padding: 0 4rem;

  @media (min-width: 980px) {
    padding: 0 8rem;
    background-image: url('images/background.svg');
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 55% auto;
  }

  h2 {
    margin-bottom: 1.6rem;
    font-size: 6.4rem;
    font-weight: 400;
    line-height: 100%;
  }

  h3 {
    color: ${props => props.theme.colors.text.contrast};
    font-size: 2.4rem;
    font-weight: 400;

    margin-bottom: 2.4rem;
  }
`

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 144rem;
`

export const Content = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 980px) {
    justify-content: space-between;
    flex-direction: row;
  }
`

export const Apresentation = styled.div`
  max-width: 32rem;

  h2 {
    color: ${props => props.theme.colors.text.primary};
  }

  h3 {
    color: ${props => props.theme.colors.text.contrast};
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
  display: none;

  @media (min-width: 980px) {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    height: 100%;
    width: 100%;
    max-width: 70rem;

    &:nth-child(odd) {
      align-items: center;
    }

    img {
      display: block;
      height: 75%;
    }
  }
`

export const Description = styled.div`
  max-width: 32rem;

  h2 {
    margin-bottom: 4rem;
    color: ${props => props.theme.colors.text.contrast};
    font-size: 4rem;
  }

  h3 {
    color: ${props => props.theme.colors.text.primary_light};
  }

  @media (min-width: 980px) {
    max-width: 50rem;

    h2 {
      font-size: 6.4rem;
    }
  }
`
export const Contact = styled.div`
  max-width: 32rem;

  h2 {
    color: ${props => props.theme.colors.text.contrast};
    font-size: 4rem;
  }

  h3 {
    margin: 4rem 0;
    color: ${props => props.theme.colors.text.primary_light};
  }

  ul {
    list-style: none;
    color: ${props => props.theme.colors.text.primary_light};
    font-weight: 600;

    li {
      display: flex;
      align-items: center;

      margin-top: 1.6rem;

      img {
        margin-right: 0.8rem;
      }
    }
  }

  @media (min-width: 980px) {
    max-width: 50rem;

    h2 {
      font-size: 6.4rem;
    }
  }
`
