import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../features/auth/AuthContext.jsx'

function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()

function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const email = formData.get('email')

  login(email)
  navigate('/account')
}

  return (
    <section className="auth-page">
      <div className="auth-content">
        <p className="eyebrow">Welcome back</p>

        <h1>Sign in</h1>

        <p className="auth-intro">
          Access your orders, wishlist, and account details.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            required
          />

          <button className="auth-button" type="submit">
            Sign in
          </button>
        </form>

        <p className="auth-switch">
          Don&apos;t have an account?{' '}
          <Link to="/register">Create one</Link>
        </p>
      </div>
    </section>
  )
}

export default LoginPage