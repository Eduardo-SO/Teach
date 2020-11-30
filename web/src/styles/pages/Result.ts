import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100vh;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 144rem;
  padding: 0 4rem;

  @media (min-width: 980px) {
    padding: 0 8rem;
  }
`

export const Content = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 980px) {
    justify-content: space-between;
    flex-direction: row;
  }
`

export const CompletedTest = styled.div`
  h1 {
    margin-bottom: 3.2rem;
    color: ${props => props.theme.colors.text.contrast};

    font-size: 5.6rem;
    font-weight: 400;
    line-height: 100%;
  }

  h2 {
    margin-bottom: 2.4rem;
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 100%;

    strong {
      font-size: 4rem;
    }
  }

  p {
    margin-bottom: 4rem;

    font-size: 2.4rem;
    font-weight: 400;

    strong {
      font-size: 2.4rem;
    }
  }

  strong {
    color: ${props => props.theme.colors.text.contrast};
  }
`

export const Hero = styled.div`
  display: none;

  @media (min-width: 980px) {
    display: flex;
    justify-content: end;
    align-items: center;

    height: 100%;
    width: 100%;
    max-width: 70rem;

    img {
      margin-right: -150px;
    }
  }
`

export const SendMailButton = styled.button`
  width: fit-content;
  padding: 1rem 4rem;

  margin: 0 0.8rem 0.8rem 0;
  border: none;
  border-radius: 0.4rem;
  background: #5200ff;
  color: #cfd7dc;

  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`

export const GoHomeButton = styled.button`
  width: fit-content;
  padding: 1rem 4rem;

  border: none;
  border-radius: 0.4rem;
  background: ${props => props.theme.colors.text.contrast};
  color: #cfd7dc;

  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`
