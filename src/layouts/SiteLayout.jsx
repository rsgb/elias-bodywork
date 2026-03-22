import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'
import { SiteFooter } from '../components/SiteFooter/SiteFooter'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <SiteFooter />
    </>
  )
}
