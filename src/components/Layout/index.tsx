import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { Suspense } from 'react'
import { ErrorAstronaut, LoadingRocket } from '..'
import { ErrorBoundary } from 'react-error-boundary'

export const Layout = () => {
  return (
    <>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorAstronaut}>
        <Suspense fallback={<LoadingRocket />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </>
  )
}
