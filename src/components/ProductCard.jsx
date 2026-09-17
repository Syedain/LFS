import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.slug}`} className="product-image">
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="product-card-info">
        <div>
          <p className="product-category">{product.category}</p>
          <h3>
            <Link to={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
        </div>

        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>

      <button className="wishlist-button" type="button" aria-label={`Add ${product.name} to wishlist`}>
        ♡
      </button>
    </article>
  )
}

export default ProductCard