import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/LFS-logo.png'

function StoreLayout() {
  return (
    <div className="store-shell">
      <div className="announcement-bar">
        <p>Complimentary shipping on orders over $75</p>
        <Link to="/shop">Explore the new collection <span aria-hidden="true">↗</span></Link>
      </div>

      <header className="site-header">
        <Link className="brand" to="/" aria-label="LFS Store home">
          <img src={logo} alt="Leather Factory Shop" />
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <Link to="/shop">Shop all</Link>
          <Link to="/category/men">Men</Link>
          <Link to="/category/women">Women</Link>
          <Link to="/category/accessories">Accessories</Link>
        </nav>

        <div className="header-actions">
          <Link className="icon-link" to="/search" aria-label="Search">⌕</Link>
          <Link className="icon-link" to="/account" aria-label="Account">♙</Link>
          <Link className="bag-link" to="/cart">Bag <span>0</span></Link>
        </div>
      </header>

      <main className="page-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <p className="footer-brand">LFS <em>studio</em></p>
          <p className="footer-note">Thoughtful essentials for everyday living.</p>
        </div>
        <div className="footer-links">
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/shipping">Shipping & returns</Link>
        </div>
        <p className="copyright">© 2026 LFS Studio</p>
      </footer>
    </div>
  )
}

export default StoreLayout