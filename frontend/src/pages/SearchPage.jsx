import { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../services/products'

function SearchPage() {
  const [query, setQuery] = useState('')
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

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return []
    }

    return products.filter((product) =>
      `${product.name} ${product.category}`
        .toLowerCase()
        .includes(normalizedQuery),
    )
  }, [query, products])

  return (
    <section className="search-page">
      <div className="search-heading">
        <p className="eyebrow">Find your next essential</p>
        <h1>Search</h1>

        <label className="search-input-label" htmlFor="product-search">
          Search products
        </label>

        <input
          id="product-search"
          className="search-input"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try “leather bag”"
        />
      </div>

      {loading && <p className="search-message">Loading products...</p>}

      {!loading && !query.trim() && (
        <p className="search-message">
          Search by product name or category.
        </p>
      )}

      {!loading && query.trim() && results.length === 0 && (
        <div className="search-empty">
          <h2>No products found</h2>
          <p>Try another product name or category.</p>
        </div>
      )}

      {!loading && results.length > 0 && (
        <div className="product-grid search-results">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}

export default SearchPage