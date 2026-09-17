import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from './ProductCard'

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Made for everyday</p>
          <h2>Featured pieces</h2>
        </div>

        <Link className="text-link" to="/shop">
          Shop all products <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts