const reviews = [
  {
    text: 'The leather quality is beautiful, and the bag looks even better in person.',
    name: 'Sarah M.',
    product: 'Classic Leather Tote',
  },
  {
    text: 'The wallet feels strong, well-made, and arrived beautifully packaged.',
    name: 'Daniel R.',
    product: 'Heritage Wallet',
  },
  {
    text: 'Simple, timeless, and exactly what I was looking for.',
    name: 'Aisha K.',
    product: 'Everyday Crossbody',
  },
]

function CustomerReviews() {
  return (
    <section className="reviews-section">
      <div className="section-heading reviews-heading">
        <div>
          <p className="eyebrow">Loved by our customers</p>
          <h2>Good things, said well.</h2>
        </div>

        <div className="review-rating">
          <span>★★★★★</span>
          <p>4.9 average rating</p>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.name}>
            <div className="review-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>

            <blockquote>“{review.text}”</blockquote>

            <div className="review-author">
              <strong>{review.name}</strong>
              <span>Purchased {review.product}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews