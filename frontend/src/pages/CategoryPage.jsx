import { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { fetchProductsByFilters } from '../services/products'

const categoryNames = {
  men: 'Men',
  women: 'Women',
  'new-arrivals': 'New Arrivals',
  halloween: 'Halloween',
}

const subcategoryNames = {
  biker: 'Biker',
  blazers: 'Blazers',
  bomber: 'Bomber',
  hooded: 'Hooded',
  vest: 'Vest',
}

function CategoryPage() {
  const { slug, subcategory } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadProducts() {
      const data = await fetchProductsByFilters({
        category: slug,
        subcategory,
      })

      if (isMounted) {
        setProducts(data)
        setLoading(false)
      }
    }

    loadProducts()

    return () => {
      isMounted = false
    }
  }, [slug, subcategory])

  const pageTitle = subcategory
    ? subcategoryNames[subcategory] ?? subcategory
    : categoryNames[slug] ?? slug

  const filteredProducts = products

  const subcategories =
  slug === 'women'
    ? [
        { slug: 'biker', label: 'Biker' },
        { slug: 'bomber', label: 'Bomber' },
      ]
    : [
        { slug: 'biker', label: 'Biker' },
        { slug: 'blazers', label: 'Blazers' },
        { slug: 'bomber', label: 'Bomber' },
        { slug: 'hooded', label: 'Hooded' },
        { slug: 'vest', label: 'Vest' },
      ]

  return (
    <section className="category-page">
      <div className="category-page-heading">
        <div>
          <p className="eyebrow">
            Leather Factory Shop / {subcategory ? categoryNames[slug] : 'Collection'}
          </p>

          <h1>{pageTitle}</h1>

          <p className="category-page-intro">
            Explore our {pageTitle.toLowerCase()} collection.
          </p>
        </div>

        <Link className="text-link" to="/shop">
          View all products <span aria-hidden="true">↗</span>
        </Link>
      </div>

      {slug === 'men' || slug === 'women' ? (
        <nav className="subcategory-nav" aria-label={`${pageTitle} categories`}>
          <NavLink to={`/category/${slug}`}end>All</NavLink>
          {subcategories.map((item) => (
            <NavLink key={item.slug} to={`/category/${slug}/${item.slug}`} >
              {item.label}
            </NavLink>
          ))}
        </nav>
      ) : null}

      {loading ? (
        <p className="search-message">Loading products...</p>
      ) : filteredProducts.length === 0 ? (
        <div className="category-empty">
          <h2>No products in this category yet</h2>
          <p>New LFS pieces will be added here soon.</p>
          <Link className="primary-button" to="/shop">
            Shop all products <span aria-hidden="true">↗</span>
          </Link>
        </div>
      ) : (
        <div className="product-grid category-product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}

export default CategoryPage