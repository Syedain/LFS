import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCart } from '../features/cart/CartContext.jsx'
import { fetchProductBySlug } from '../services/products'

function ProductPage() {
  const { slug } = useParams()

  const { addToCart } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadProduct() {
      setLoading(true)
      const foundProduct = await fetchProductBySlug(slug)

      if (isMounted) {
        setProduct(foundProduct)
        setLoading(false)
      }
    }

    loadProduct()

    return () => {
      isMounted = false
    }
  }, [slug])

  if (loading) {
    return (
      <section className="product-page">
        <p className="search-message">Loading product...</p>
      </section>
    )
  }

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
          ${Number(product.price ?? 0).toFixed(2)}
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

        <button
          className="add-to-cart-button"
          type="button"
          onClick={() => addToCart(product, quantity)}
        >
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