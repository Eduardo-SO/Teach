import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  color: ${props => props.theme.colors.text.primary_light};

  label {
    cursor: pointer;
  }

  #checkmark {
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.4rem;
    height: 2.4rem;

    margin-right: 1.6rem;
    border-radius: 8px;
    border: 2px solid ${props => props.theme.colors.text.contrast};

    background-color: ${props => props.theme.colors.text.secondary};

    transition: background-color 0.6s;

    &::after {
      content: '';

      width: 0.4rem;
      height: 0.7rem;

      border-right: 3px solid ${props => props.theme.colors.text.contrast};
      border-bottom: 3px solid ${props => props.theme.colors.text.contrast};

      opacity: 0;

      transform: rotateZ(40deg) scale(10);
      transition: all 0.4s;
    }
  }

  #check:checked ~ #checkmark {
    &::after {
      opacity: 1;

      transform: rotateZ(40deg) scale(1);
    }
  }
`
