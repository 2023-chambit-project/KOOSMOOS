import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { Suspense } from 'react'
import { LoadingRocket } from '..'

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingRocket />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}
