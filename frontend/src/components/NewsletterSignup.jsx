function NewsletterSignup() {
  function handleSubmit(event) {
    event.preventDefault()
    // Backend integration will be added later.
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <p className="eyebrow">Stay in the loop</p>

        <h2>Good leather.<br />Good news.</h2>

        <p>
          Sign up for first access to new collections, thoughtful offers,
          and stories from Leather Factory Shop.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>

          <input
            id="newsletter-email"
            name="email"
            type="email"
            placeholder="Your email address"
            required
          />

          <button type="submit">
            Subscribe <span aria-hidden="true">↗</span>
          </button>
        </form>

        <small>
          By subscribing, you agree to receive marketing emails from us.
        </small>
      </div>
    </section>
  )
}

export default NewsletterSignup