
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const AuthorizedLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AuthorizedLayout
