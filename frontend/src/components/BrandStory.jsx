import { Link } from 'react-router-dom'

function BrandStory() {
  return (
    <section className="brand-story">
      <div className="brand-story-image">
        <img
          src="/images/brand-story.jpg"
          alt="Leather craftsmanship at Leather Factory Shop"
        />
      </div>

      <div className="brand-story-content">
        <p className="eyebrow">Our philosophy</p>

        <h2>Leather with a story to tell.</h2>

        <p>
          At Leather Factory Shop, we believe the best things are made to
          last. Every piece is selected for its quality, character, and
          ability to become part of your everyday life.
        </p>

        <p>
          From timeless bags to everyday wallets, our collection is designed
          with purpose and made to age beautifully.
        </p>

        <Link className="text-link" to="/about">
          Discover our story <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  )
}

export default BrandStory