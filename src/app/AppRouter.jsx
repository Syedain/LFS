import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StoreLayout from '../layouts/StoreLayout'
import PlaceholderPage from '../pages/PlaceholderPage'
import HomePage from '../pages/HomePage'
import ShopPage from '../pages/ShopPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StoreLayout />}>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/shop"
            element={<ShopPage />}
          />

          <Route
            path="/category/:slug"
            element={<PlaceholderPage title="Category" />}
          />

          <Route
            path="/product/:slug"
            element={<ProductPage />}
          />

          <Route
            path="/cart"
            element={<CartPage />}
          />

          <Route
            path="/checkout"
            element={<CheckoutPage />}
          />

          <Route
            path="/order-success/:orderId"
            element={<PlaceholderPage title="Order Successful" />}
          />

          <Route
            path="/login"
            element={<PlaceholderPage title="Login" />}
          />

          <Route
            path="/register"
            element={<PlaceholderPage title="Create Account" />}
          />

          <Route
            path="/account"
            element={<PlaceholderPage title="My Account" />}
          />

          <Route
            path="/wishlist"
            element={<PlaceholderPage title="Wishlist" />}
          />

          <Route
            path="*"
            element={<PlaceholderPage title="Page Not Found" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter