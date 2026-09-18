import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useWishlist } from '../features/wishlist/WishlistContext'

function WishlistPage() {
  const { wishlistItems } = useWishlist()

  if (wishlistItems.length === 0) {
    return (
      <section className="empty-wishlist">
        <p className="eyebrow">Saved pieces</p>
        <h1>Your wishlist is empty</h1>
        <p>Save the pieces you love and find them here later.</p>
        <Link className="primary-button" to="/shop">
          Explore the collection <span aria-hidden="true">↗</span>
        </Link>
      </section>
    )
  }

  return (
    <section className="wishlist-page">
      <div className="wishlist-heading">
        <div>
          <p className="eyebrow">Saved pieces</p>
          <h1>My wishlist</h1>
        </div>

        <p>{wishlistItems.length} saved item(s)</p>
      </div>

      <div className="product-grid">
        {wishlistItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default WishlistPage