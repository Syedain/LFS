import { createContext, useContext, useEffect, useState } from 'react'

const WishlistContext = createContext(null)

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('lfs-wishlist')

    return savedWishlist ? JSON.parse(savedWishlist) : []
  })

  useEffect(() => {
    localStorage.setItem('lfs-wishlist', JSON.stringify(wishlistItems))
  }, [wishlistItems])

  function isInWishlist(productId) {
    return wishlistItems.some((item) => item.id === productId)
  }

  function toggleWishlist(product) {
    setWishlistItems((currentItems) => {
      const alreadySaved = currentItems.some(
        (item) => item.id === product.id,
      )

      if (alreadySaved) {
        return currentItems.filter((item) => item.id !== product.id)
      }

      return [...currentItems, product]
    })
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        isInWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)

  if (!context) {
    throw new Error('useWishlist must be used inside WishlistProvider')
  }

  return context
}