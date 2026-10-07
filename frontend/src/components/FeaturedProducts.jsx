import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { fetchProductsByFilters } from '../services/products'

function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    let isMounted = true

    async function loadProducts() {
      setLoading(true)
      const data = await fetchProductsByFilters()

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

  const featuredCategories = ['men', 'women', 'halloween', 'new-arrivals']
    const featuredProducts = featuredCategories
      .map((category) => products.find((product) => product.category === category))
      .filter(Boolean)

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
          {featuredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}

export default FeaturedProducts