// AppLayout.jsx or App.js
import { useLocation } from 'react-router-dom'
import Header from './components/Header'

const Layout = ({ children }) => {
  const location = useLocation()

  const noHeaderRoutes = ['/auth',]

  const shouldShowHeader = !noHeaderRoutes.includes(location.pathname)

  return (
    <>
      {shouldShowHeader && <Header />}
      <main>{children}</main>
    </>
  )
}

export default Layout
