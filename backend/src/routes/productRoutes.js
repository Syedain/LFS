import { Router } from 'express'
import { prisma } from '../lib/prisma.js'

const router = Router()

router.get('/', async (request, response) => {
  try {
    const { category, subcategory, collection } = request.query

    const where = {}

    if (category) {
      where.category = category
    }

    if (subcategory) {
      where.subcategory = subcategory
    }

    if (collection) {
      where.collections = {
        has: collection,
      }
    }

    const products = await prisma.product.findMany({
      where,
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