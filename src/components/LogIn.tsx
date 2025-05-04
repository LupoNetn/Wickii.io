import { useState } from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700/20">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
            Welcome Back
          </h2>
          <p className="mt-2 text-gray-400">
            Sign in to continue learning
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-lg bg-gray-900/50 border border-gray-700/50 
                text-gray-100 placeholder-gray-500 py-2 px-3 
                focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 
                transition-colors duration-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded-lg bg-gray-900/50 border border-gray-700/50 
                text-gray-100 placeholder-gray-500 py-2 px-3 
                focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 
                transition-colors duration-200"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-700/50 bg-gray-900/50 
                  text-emerald-400 focus:ring-emerald-400/50"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="text-emerald-400 hover:text-emerald-300">
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg font-medium text-white 
              bg-gradient-to-r from-emerald-400 to-teal-400 
              hover:from-emerald-500 hover:to-teal-500 
              focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 
              transform transition-all duration-200 hover:scale-[1.02]"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-emerald-400 hover:text-emerald-300">
              Sign up now
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LogIn
