import { GlobalStyles, theme } from './styles'

import { routers } from '@/routes/routing'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ErrorAstronaut, LoadingRocket } from './components'
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
      <ThemeProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorAstronaut}>
          <Suspense fallback={<LoadingRocket />}>
            <GlobalStyles />
            <RouterProvider router={routers} />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
