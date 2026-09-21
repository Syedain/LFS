import { Link } from 'react-router-dom'
import { useWishlist } from '../features/wishlist/WishlistContext.jsx'

function ProductCard({ product }) {
  const { isInWishlist, toggleWishlist } = useWishlist()
  const saved = isInWishlist(product.id)

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

      <button className={`wishlist-button ${saved ? 'saved' : ''}`}
  type="button"
  aria-label={
    saved
      ? `Remove ${product.name} from wishlist`
      : `Add ${product.name} to wishlist`
  }
  onClick={() => toggleWishlist(product)}
>
  {saved ? '♥' : '♡'}
</button>
    </article>
  )
}

export default ProductCard