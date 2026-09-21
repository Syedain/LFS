const API_BASE_URL = 'http://localhost:5000'

const normalizeProduct = (product) => ({
  ...product,
  price: Number(product.price ?? 0),
})

export async function fetchProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products`)

    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }

    const result = await response.json()
    const products = Array.isArray(result?.data) ? result.data : []

    return products.map(normalizeProduct)
  } catch (error) {
    console.error('Unable to fetch products:', error)
    return []
  }
}

export async function fetchProductBySlug(slug) {
  const products = await fetchProducts()
  return products.find((product) => product.slug === slug) ?? null
}
