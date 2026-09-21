import { Link } from 'react-router-dom'
import { useAuth } from '../features/auth/AuthContext.jsx'

function RegisterPage() {
  const { register } = useAuth()

function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')
  const confirmPassword = formData.get('confirmPassword')

  if (password !== confirmPassword) {
    alert('Passwords do not match')
    return
  }

  register(name, email)
}

  return (
    <section className="auth-page">
      <div className="auth-content">
        <p className="eyebrow">Join LFS</p>

        <h1>Create account</h1>

        <p className="auth-intro">
          Create an account to track orders and save your favorite pieces.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            required
          />

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
            placeholder="Create a password"
            minLength="8"
            required
          />

          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Repeat your password"
            minLength="8"
            required
          />

          <button className="auth-button" type="submit">
            Create account
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{' '}
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </section>
  )
}

export default RegisterPage