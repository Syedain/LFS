import { Navigate, Link } from 'react-router-dom'
import { useCart } from '../features/cart/CartContext'

function CheckoutPage() {
  const { cartItems, cartTotal } = useCart()

  if (cartItems.length === 0) {
    return <Navigate to="/cart" replace />
  }

  function handleSubmit(event) {
    event.preventDefault()

    // Payment and order creation will be connected later.
    alert('Checkout form submitted')
  }

  return (
    <section className="checkout-page">
      <div className="checkout-heading">
        <p className="eyebrow">Almost yours</p>
        <h1>Checkout</h1>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Contact information</legend>

            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </fieldset>

          <fieldset>
            <legend>Shipping address</legend>

            <div className="form-row">
              <div>
                <label htmlFor="firstName">First name</label>
                <input id="firstName" name="firstName" required />
              </div>

              <div>
                <label htmlFor="lastName">Last name</label>
                <input id="lastName" name="lastName" required />
              </div>
            </div>

            <label htmlFor="address">Address</label>
            <input id="address" name="address" required />

            <label htmlFor="apartment">
              Apartment, suite, etc. <span>Optional</span>
            </label>
            <input id="apartment" name="apartment" />

            <div className="form-row">
              <div>
                <label htmlFor="city">City</label>
                <input id="city" name="city" required />
              </div>

              <div>
                <label htmlFor="postalCode">Postal code</label>
                <input id="postalCode" name="postalCode" required />
              </div>
            </div>

            <label htmlFor="country">Country</label>
            <select id="country" name="country" defaultValue="Pakistan" required>
              <option value="Pakistan">Pakistan</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
            </select>
          </fieldset>

          <fieldset>
            <legend>Payment</legend>

            <p className="payment-notice">
              Payment integration will be added after the checkout flow is
              complete.
            </p>

            <label htmlFor="cardName">Name on card</label>
            <input id="cardName" name="cardName" required />

            <label htmlFor="cardNumber">Card number</label>
            <input
              id="cardNumber"
              name="cardNumber"
              inputMode="numeric"
              placeholder="0000 0000 0000 0000"
              required
            />

            <div className="form-row">
              <div>
                <label htmlFor="expiry">Expiry date</label>
                <input
                  id="expiry"
                  name="expiry"
                  placeholder="MM/YY"
                  required
                />
              </div>

              <div>
                <label htmlFor="securityCode">Security code</label>
                <input
                  id="securityCode"
                  name="securityCode"
                  inputMode="numeric"
                  placeholder="CVC"
                  required
                />
              </div>
            </div>
          </fieldset>

          <button className="place-order-button" type="submit">
            Place order
          </button>
        </form>

        <aside className="checkout-summary">
          <h2>Order summary</h2>

          <div className="checkout-items">
            {cartItems.map((item) => (
              <div className="checkout-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.quantity} × ${item.price.toFixed(2)}
                  </p>
                </div>

                <strong>
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
              </div>
            ))}
          </div>

          <div className="checkout-total">
            <span>Total</span>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>

          <Link className="back-link" to="/cart">
            ← Return to cart
          </Link>
        </aside>
      </div>
    </section>
  )
}

export default CheckoutPage