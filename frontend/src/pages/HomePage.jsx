import { Link } from 'react-router-dom'
import CategorySection from '../components/CategorySection'
import FeaturedProducts from '../components/FeaturedProducts'
import BrandStory from '../components/BrandStory'
import CustomerReviews from '../components/CustomerReviews'
import NewsletterSignup from '../components/NewsletterSignup'

function HomePage() {
  return (
    <>
    <section className="home-hero">
      <div className="hero-content">
        <p className="eyebrow">Leather Factory Shop</p>

        <h1>Made for life.<br />Built to last.</h1>

        <p className="hero-description">
          Timeless leather essentials, crafted with character and made to
          become part of your everyday story.
        </p>

        <Link className="primary-button" to="/shop">
          Shop the collection <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="hero-image">
        <img
          src="/images/hero-leather-bag.jpg"
          alt="Leather bag from Leather Factory Shop"
        />
      </div>
    </section>
    <CategorySection />
    <FeaturedProducts />
    <BrandStory />
    <CustomerReviews />
    <NewsletterSignup />
</>
  )
}

export default HomePage