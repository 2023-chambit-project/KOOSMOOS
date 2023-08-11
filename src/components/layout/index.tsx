import { Outlet } from 'react-router-dom'

import Header from './header/Header'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
