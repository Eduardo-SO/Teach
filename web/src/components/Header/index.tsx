import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { Container } from './styles'

interface Props {
  toggleTheme(): void
  logo?: boolean
}

const Header: React.FC<Props> = ({ toggleTheme, logo }) => {
  const { title, colors } = useContext(ThemeContext)

  return (
    <Container>
      {logo && <h1>Teach</h1>}

      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={colors.text.contrast}
        offColor={colors.text.primary}
        onHandleColor={colors.text.primary}
        offHandleColor={colors.text.contrast}
      />
    </Container>
  )
}

export default Header
