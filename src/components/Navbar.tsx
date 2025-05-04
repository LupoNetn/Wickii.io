import  { useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  return (
    <nav className="fixed w-full backdrop-blur-md z-50 border-b bg-gray-900/80 border-gray-700/20">
      <div className='container mx-auto p-4 lg:px-14 lg:py-5'>
        <div className='flex justify-between items-center'>
          <div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
              WICKII
            </Link>
          </div>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 
              transition-all duration-300 shadow-lg backdrop-blur-sm border border-gray-700/20"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <FiSun size={20} className="text-emerald-400" />
            ) : (
              <FiMoon size={20} className="text-emerald-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
