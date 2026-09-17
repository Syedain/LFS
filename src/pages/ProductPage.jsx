import { Link, Navigate, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useState } from 'react'
import { useCart } from '../features/cart/CartContext.jsx'

function ProductPage() {
  const { slug } = useParams()

  const { addToCart } = useCart()

  const [quantity, setQuantity] = useState(1)

  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <section className="product-page">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-detail-content">
        <p className="eyebrow">{product.category}</p>

        <h1>{product.name}</h1>

        <p className="product-detail-price">
          ${product.price.toFixed(2)}
        </p>

        <p className="product-description">
          Crafted from quality leather, this timeless piece is designed for
          everyday use and made to age beautifully.
        </p>

        <div className="product-option">
          <label htmlFor="quantity">Quantity</label>

        <select 
            id="quantity"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        </div>

        <button className="add-to-cart-button" type="button" onClick={() => addToCart(product, quantity)} >
            Add to cart
        </button>

        <Link className="back-link" to="/shop">
          ← Continue shopping
        </Link>
      </div>
    </section>
  )
}

export default ProductPage