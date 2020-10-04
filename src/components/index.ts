import Button from './Button/Button'
import SuprimThemeProvider from './suprim-provider/SuprimThemeProvider'
import { darkTheme, defaultTheme } from './themes'

interface theme {
  default: any
  dark: any
}

const theme: theme = {
  default: defaultTheme,
  dark: darkTheme
}

export { Button, SuprimThemeProvider, theme }
