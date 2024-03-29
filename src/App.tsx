import { GlobalStyles, theme } from './styles'

import { routers } from '@/routes/routing'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import Modal from './components/Modal'
import { worker } from './mocks/browser'

function App() {
  if (import.meta.env.VITE_APP_API_MOCKING === 'enable') {
    worker.start()
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        suspense: true,
        useErrorBoundary: true,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Modal />
          <RouterProvider router={routers} />
        </ThemeProvider>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
