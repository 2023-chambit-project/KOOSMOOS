import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from './styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      :)
    </ThemeProvider>
  )
}

export default App
