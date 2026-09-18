import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './features/cart/CartContext.jsx'
import { AuthProvider } from './features/auth/AuthContext.jsx'
import { WishlistProvider } from './features/wishlist/WishlistContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
