import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../features/auth/AuthContext'

function AccountPage() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return (
    <section className="account-page">
      <div className="account-heading">
        <p className="eyebrow">Leather Factory Shop</p>
        <h1>My account</h1>
        <p>Welcome back, {user.name}.</p>
      </div>

      <div className="account-layout">
        <aside className="account-menu">
          <Link className="active" to="/account">
            Account overview
          </Link>
          <Link to="/orders">Order history</Link>
          <Link to="/wishlist">Wishlist</Link>
          <button type="button" onClick={() => {
            logout()
            navigate('/login')
          }}>
            Sign out
          </button>
        </aside>

        <div className="account-details">
          <div className="account-card">
            <p className="eyebrow">Profile details</p>
            <h2>Personal information</h2>

            <div className="account-info">
              <div>
                <span>Name</span>
                <strong>{user.name}</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>{user.email}</strong>
              </div>
            </div>
          </div>

          <div className="account-card">
            <p className="eyebrow">Your orders</p>
            <h2>Nothing here yet</h2>
            <p>
              Your order history will appear here after your first purchase.
            </p>
            <Link className="primary-button" to="/shop">
              Start shopping <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccountPage