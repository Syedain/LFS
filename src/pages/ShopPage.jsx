import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../services/products'

function ShopPage() {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
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

  const categories = ['All', ...new Set(products.map((product) => product.category))]

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  if (loading) {
    return (
      <section className="shop-page">
        <p className="search-message">Loading products...</p>
      </section>
    )
  }

  return (
    <section className="shop-page">
      <div className="shop-heading">
        <div>
          <p className="eyebrow">The collection</p>
          <h1>Shop all</h1>
          <p className="shop-intro">
            Timeless leather essentials made for everyday use.
          </p>
        </div>

        <p className="product-count">
          {filteredProducts.length} products
        </p>
      </div>

      <div className="shop-toolbar">
        <div className="category-filters" aria-label="Filter products">
          {categories.map((category) => (
            <button
              className={selectedCategory === category ? 'active' : ''}
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="search-message">No products available right now.</p>
      ) : (
        <div className="product-grid shop-product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ShopPage