import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function SearchPage() {
  const [query, setQuery] = useState('')

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
  }, [query])

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

      {!query.trim() && (
        <p className="search-message">
          Search by product name or category.
        </p>
      )}

      {query.trim() && results.length === 0 && (
        <div className="search-empty">
          <h2>No products found</h2>
          <p>Try another product name or category.</p>
        </div>
      )}

      {results.length > 0 && (
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