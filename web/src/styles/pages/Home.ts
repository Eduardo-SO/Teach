import styled from 'styled-components'

export const Container = styled.div`
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
  padding: 0 80px;
`

export const Apresentation = styled.div`
  flex: 2;
  display: flex;
  align-items: center;

  flex-direction: column;
`

export const Hero = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;

  img {
    height: 75%;
  }
`
