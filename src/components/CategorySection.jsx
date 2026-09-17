import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Bags',
    description: 'Designed to carry your everyday',
    image: '/images/bags.jpg',
    path: '/category/bags',
  },
  {
    name: 'Wallets',
    description: 'Small essentials, made beautifully',
    image: '/images/wallets.jpg',
    path: '/category/wallets',
  },
  {
    name: 'Belts',
    description: 'The finishing touch',
    image: '/images/belts.jpg',
    path: '/category/belts',
  },
  {
    name: 'Accessories',
    description: 'Details that make a difference',
    image: '/images/accessories.jpg',
    path: '/category/accessories',
  },
]

function CategorySection() {
  return (
    <section className="category-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Find your everyday essential</p>
          <h2>Shop by category</h2>
        </div>

        <Link className="text-link" to="/shop">
          View all products <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <Link
            className="category-card"
            key={category.name}
            to={category.path}
          >
            <div className="category-image">
              <img src={category.image} alt={category.name} />
            </div>

            <div className="category-card-info">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span aria-hidden="true">Shop now ↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategorySection