import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
  const savedUser = localStorage.getItem('lfs-user')

  return savedUser ? JSON.parse(savedUser) : null
})

useEffect(() => {
  if (user) {
    localStorage.setItem('lfs-user', JSON.stringify(user))
  } else {
    localStorage.removeItem('lfs-user')
  }
}, [user])

  function login(email) {
    setUser({
      email,
      name: email.split('@')[0],
    })
  }

  function register(name, email) {
    setUser({
      name,
      email,
    })
  }

  function logout() {
    setUser(null)
  }

  const value = {
    user,
    isAuthenticated: Boolean(user),
    login,
    register,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}