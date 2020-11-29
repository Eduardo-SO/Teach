import styled from 'styled-components'

interface CheckProps {
  isChecked: boolean
}

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
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    margin-bottom: 2.4rem;
    color: ${props => props.theme.colors.text.contrast};

    font-size: 2.4rem;
    font-weight: 400;
    line-height: 100%;
  }

  p {
    margin-bottom: 4rem;

    font-size: 2.4rem;
    font-weight: 400;
    line-height: 100%;
  }
`

export const Navigation = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 8rem;

  button {
    width: 16rem;
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

    &:first-child {
      background: #5200ff;
      margin-right: 1.6rem;
    }
  }
`

export const Answer = styled.button`
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
  width: 1.6rem;

  margin-right: 1.6rem;

  border: 2px solid ${props => props.theme.colors.text.contrast};
  border-radius: 4px;

  background: ${props =>
    props.isChecked
      ? props.theme.colors.text.contrast
      : props.theme.colors.text.secondary};

  transition: background 0.2s;
`
