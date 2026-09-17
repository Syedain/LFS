import { Link } from 'react-router-dom'

function PlaceholderPage({ title }) {
  return (
    <section className="placeholder-page">
      <p className="eyebrow">LFS / {title}</p>
      <h1>{title}</h1>
      <p className="placeholder-copy">A considered collection is taking shape here. Check back shortly for something worth keeping.</p>
      <Link className="primary-button" to="/shop">Continue shopping <span aria-hidden="true">↗</span></Link>
    </section>
  )
}

export default PlaceholderPage