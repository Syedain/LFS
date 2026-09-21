import { Router } from 'express'
import { prisma } from '../lib/prisma.js'

const router = Router()

router.get('/', async (request, response) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    response.json({
      success: true,
      data: products,
    })
  } catch (error) {
    console.error('Failed to fetch products:', error)

    response.status(500).json({
      success: false,
      message: 'Unable to fetch products',
    })
  }
})

export default router