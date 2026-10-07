import 'dotenv/config'
import { prisma } from '../src/lib/prisma.js'

const products = [
  {
    id: 'lionhearted-moto',
    name: 'Lionhearted Moto',
    slug: 'lionhearted-moto',
    description: 'A timeless leather tote designed for everyday use.',
    price: 129,
    category: 'men',
    subcategory: 'biker',
    image: '/images/products/Lionhearted-Moto.jpg',
  },
  {
    id: 'men-padded-shoulders',
    name: 'Men’s Padded Shoulders',
    slug: 'men-padded-shoulders',
    description: 'Men’s Padded Shoulders.',
    price: 149,
    category: 'men',
    subcategory: 'biker',
    image: '/images/products/Men-Padded-Shoulders.jpg',
  },
  {
    id: 'brute-moto-jacket',
    name: 'Brute Moto Jacket',
    slug: 'brute-moto-jacket',
    description: 'A rugged moto jacket for the modern rider.',
    price: 199,
    category: 'men',
    subcategory: 'blazers',
    image: '/images/products/Brute-Moto-Jacket.jpg',
  },
  {
    id: 'macho-fit',
    name: 'Macho Fit',
    slug: 'macho-fit',
    description: 'A stylish fit for the modern man.',
    price: 179,
    category: 'men',
    subcategory: 'blazers',
    image: '/images/products/Macho-Fit.jpg',
  },
  {
    id: 'aeronaut-long-shearling-coat',
    name: 'Aeronaut Long Shearling Coat',
    slug: 'aeronaut-long-shearling-coat',
    description: 'A luxurious shearling coat for cold weather.',
    price: 299,
    category: 'men',
    subcategory: 'bomber',
    image: '/images/products/Aeronaut-Long-Shearling-Coat.jpg',
  },
  {
    id: 'aviator-shearling',
    name: 'Aviator Shearling',
    slug: 'aviator-shearling',
    description: 'A luxurious shearling coat for cold weather.',
    price: 299,
    category: 'men',
    subcategory: 'bomber',
    image: '/images/products/Aviator-Shearling.jpg',
  },
  {
    id: 'detachable-hoodie-jacket',
    name: 'DetachableView Hoodie Jacket',
    slug: 'detachable-hoodie-jacket',
    description: 'A versatile hoodie jacket with a detachable hood.',
    price: 129,
    category: 'men',
    subcategory: 'hooded',
    image: '/images/products/detachable-hoodie-jacket.png',
  },
  {
    id: 'flamboyant',
    name: 'Flamboyant',
    slug: 'flamboyant',
    description: 'A stylish piece for the modern man.',
    price: 179,
    category: 'men',
    subcategory: 'hooded',
    image: '/images/products/Flamboyant.jpg',
  },
  {
    id: 'creature-olive-green-casual',
    name: 'Creature Olive Green Casual',
    slug: 'creature-olive-green-casual',
    description: 'A stylish piece.',
    price: 179,
    category: 'men',
    subcategory: 'vest',
    image: '/images/products/Creature-Olive-Green-Casual.png',
  },
  {
    id: 'crook-slim-fit-riding-vest',
    name: 'Crook Slim Fit Riding Vest',
    slug: 'crook-slim-fit-riding-vest',
    description: 'A stylish riding vest with a slim fit.',
    price: 179,
    category: 'men',
    subcategory: 'vest',
    image: '/images/products/Crook-Slim-Fit-Riding-Vest.png',
  },
  {
    id: 'pink-back-skull-studed',
    name: 'Pink Back Skull Studed',
    slug: 'pink-back-skull-studed',
    description: 'A compact crossbody bag for daily essentials.',
    price: 95,
    category: 'women',
    subcategory: 'biker',
    image: '/images/products/Pink-Back-Skull-Studed.jpg',
  },
  {
    id: 'brown-retro-padded',
    name: 'Brown Retro Padded',
    slug: 'brown-retro-padded',
    description: 'A compact crossbody bag.',
    price: 95,
    category: 'women',
    subcategory: 'biker',
    image: '/images/products/Brown-Retro-Padded.jpg',
  },
  {
    id: 'leather-jacket-burnt-red',
    name: 'Leather Jacket Burnt Red',
    slug: 'leather-jacket-burnt-red',
    description: 'A stylish leather jacket in burnt red.',
    price: 199,
    category: 'women',
    subcategory: 'bomber',
    image: '/images/products/Leather-Jacket-Burnt-Red.jpg',
  },
  {
    id: 'a-1-mocha-suede-bomber-jacket',
    name: 'A-1 Mocha Suede Bomber Jacket',
    slug: 'a-1-mocha-suede-bomber-jacket',
    description: 'A stylish bomber jacket in mocha suede.',
    price: 199,
    category: 'women',
    subcategory: 'bomber',
    image: '/images/products/A-1-Mocha-Suede-Bomber-Jacket.jpg',
  },
  {
    id: 'captain-marvel-carol-danvers',
    name: 'Captain Marvel Carol Danvers',
    slug: 'captain-marvel-carol-danvers',
    description: 'A stylish Halloween costume.',
    price: 199,
    category: 'halloween',
    image: '/images/products/Captain-Marvel-Carol-Danvers.jpg',
  },
  {
    id: 'cafe-pebbled',
    name: 'Cafe Pebbled',
    slug: 'cafe-pebbled',
    description: 'A stylish New Arrival costume.',
    price: 199,
    category: 'new-arrivals',
    image: '/images/products/Cafe-Pebbled.jpg',
  },
  // {
  //   id: 'everyday-crossbody',
  //   name: 'Everyday Crossbody',
  //   slug: 'everyday-crossbody',
  //   description: 'A compact crossbody bag for daily essentials.',
  //   price: 95,
  //   category: 'Bags',
  //   image: '/images/products/everyday-crossbody.jpg',
  // },
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