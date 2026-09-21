import { prisma } from '../src/lib/prisma.js'

const products = [
  {
    id: 'classic-leather-tote',
    name: 'Classic Leather Tote',
    slug: 'classic-leather-tote',
    description: 'A timeless leather tote designed for everyday use.',
    price: 129,
    category: 'Bags',
    image: '/images/products/classic-leather-tote.jpg',
  },
  {
    id: 'everyday-crossbody',
    name: 'Everyday Crossbody',
    slug: 'everyday-crossbody',
    description: 'A compact crossbody bag for daily essentials.',
    price: 95,
    category: 'Bags',
    image: '/images/products/everyday-crossbody.jpg',
  },
  {
    id: 'heritage-wallet',
    name: 'Heritage Wallet',
    slug: 'heritage-wallet',
    description: 'A refined leather wallet built for everyday carry.',
    price: 59,
    category: 'Wallets',
    image: '/images/products/heritage-wallet.jpg',
  },
  {
    id: 'classic-leather-belt',
    name: 'Classic Leather Belt',
    slug: 'classic-leather-belt',
    description: 'A durable leather belt with a timeless finish.',
    price: 45,
    category: 'Belts',
    image: '/images/products/classic-leather-belt.jpg',
  },
]

async function main() {
  for (const product of products) {
    await prisma.product.upsert({
      where: {
        slug: product.slug,
      },
      update: product,
      create: product,
    })
  }

  console.log(`Seeded ${products.length} products`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })