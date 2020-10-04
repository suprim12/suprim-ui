import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SuprimThemeProvider, theme } from './components'
ReactDOM.render(
  <React.StrictMode>
    <SuprimThemeProvider theme={theme.default}>
      <App />
    </SuprimThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
