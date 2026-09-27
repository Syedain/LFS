import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Men',
    description: 'Leather outerwear built for the road',
    image: '/images/men.jpg',
    path: '/category/men',
  },
  {
    name: 'Women',
    description: 'Distinctive leather styles for every season',
    image: '/images/women.jpg',
    path: '/category/women',
  },
  {
    name: 'New Arrivals',
    description: 'The latest pieces from LFS',
    image: '/images/new-arrival.jpg',
    path: '/category/new-arrivals',
  },
  {
    name: 'Halloween',
    description: 'Seasonal leather with attitude',
    image: '/images/halloween.jpg',
    path: '/category/halloween',
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