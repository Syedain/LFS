import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { fetchProducts } from '../services/products'

function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadProducts() {
      setLoading(true)
      const data = await fetchProducts()

      if (isMounted) {
        setProducts(data)
        setLoading(false)
      }
    }

    loadProducts()

    return () => {
      isMounted = false
    }
  }, [])

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

      {loading ? (
        <p className="search-message">Loading featured products...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}

export default FeaturedProducts