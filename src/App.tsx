import { GlobalStyles, theme } from './styles'

import { routers } from '@/routes/routing'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={routers} />
    </ThemeProvider>
  )
}

export default App
