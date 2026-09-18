import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StoreLayout from '../layouts/StoreLayout'
import PlaceholderPage from '../pages/PlaceholderPage'
import HomePage from '../pages/HomePage'
import ShopPage from '../pages/ShopPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import AccountPage from '../pages/AccountPage'

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
            element={<LoginPage />}
          />

          <Route
            path="/register"
            element={<RegisterPage />}
          />

          <Route
            path="/account"
            element={<AccountPage />}
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