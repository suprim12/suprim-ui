import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { GlobalStyles } from '../themes'

const SuprimThemeProvider = (props: any) => {
  const { children, theme } = props
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <React.Fragment>{children}</React.Fragment>
    </ThemeProvider>
  )
}

export default SuprimThemeProvider
