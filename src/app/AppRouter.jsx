import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StoreLayout from '../layouts/StoreLayout'
import PlaceholderPage from '../pages/PlaceholderPage'
import HomePage from '../pages/HomePage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StoreLayout />}>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/shop"
            element={<PlaceholderPage title="Shop" />}
          />

          <Route
            path="/category/:slug"
            element={<PlaceholderPage title="Category" />}
          />

          <Route
            path="/product/:slug"
            element={<PlaceholderPage title="Product Details" />}
          />

          <Route
            path="/cart"
            element={<PlaceholderPage title="Shopping Cart" />}
          />

          <Route
            path="/checkout"
            element={<PlaceholderPage title="Checkout" />}
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