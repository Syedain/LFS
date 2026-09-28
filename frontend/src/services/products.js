const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const normalizeProduct = (product) => ({
  ...product,
  price: Number(product.price ?? 0),
})

export async function fetchProductsByFilters(filters = {}) {
  const params = new URLSearchParams()

  if (filters.category) {
    params.set('category', filters.category)
  }

  if (filters.subcategory) {
    params.set('subcategory', filters.subcategory)
  }

  if (filters.collection) {
    params.set('collection', filters.collection)
  }

  const queryString = params.toString()
  const endpoint = queryString
    ? `${API_BASE_URL}/api/products?${queryString}`
    : `${API_BASE_URL}/api/products`

  try {
    const response = await fetch(endpoint)

    if (!response.ok) {
      throw new Error('Failed to fetch filtered products')
    }

    const result = await response.json()
    const products = Array.isArray(result?.data) ? result.data : []

    return products.map(normalizeProduct)
  } catch (error) {
    console.error('Unable to fetch filtered products:', error)
    return []
  }
}

export async function fetchProductBySlug(slug) {
  const products = await fetchProductsByFilters()
  return products.find((product) => product.slug === slug) ?? null
}
