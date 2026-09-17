import { Link } from 'react-router-dom'
import { useCart } from '../features/cart/CartContext'

function CartPage() {
  const {
    cartItems,
    cartTotal,
    removeFromCart,
    updateQuantity,
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <section className="empty-cart">
        <p className="eyebrow">Your shopping bag</p>
        <h1>Your bag is empty</h1>
        <p>Discover something made to become part of your everyday.</p>
        <Link className="primary-button" to="/shop">
          Start shopping <span aria-hidden="true">↗</span>
        </Link>
      </section>
    )
  }

  return (
    <section className="cart-page">
      <div className="cart-heading">
        <div>
          <p className="eyebrow">Your shopping bag</p>
          <h1>Shopping bag</h1>
        </div>

        <p>{cartItems.length} item(s)</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-details">
                <p className="product-category">{item.category}</p>
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>

                <label htmlFor={`quantity-${item.id}`}>
                  Quantity
                </label>

                <select
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  onChange={(event) =>
                    updateQuantity(item.id, event.target.value)
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <button
                  className="remove-button"
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>

              <strong>
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order summary</h2>

          <div>
            <span>Subtotal</span>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>

          <div>
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>

          <Link className="checkout-button" to="/checkout">
            Continue to checkout
          </Link>

          <Link className="back-link" to="/shop">
            Continue shopping
          </Link>
        </aside>
      </div>
    </section>
  )
}

export default CartPage