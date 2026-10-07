function ContactPage() {
  return (
    <section className="contact-page">
        <div className="contact-heading">
            <p className="eyebrow">We’re here to help</p>
            <h1>Get in touch</h1>
            <p>Send us a message and we’ll get back to you as soon.</p>
        </div>

        <form className="contact-form">
            <div className="contact-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" autoComplete="name" required />
            </div>

            <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required />
            </div>

            <div className="contact-field">
                <label htmlFor="phone">Phone <span>(optional)</span></label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>

            <div className="contact-field">
                <label htmlFor="subject">Subject <span>(optional)</span></label>
                <input id="subject" name="subject" />
            </div>

            <div className="contact-field contact-field-full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" required />
            </div>

            <button className="primary-button contact-submit" type="submit">
                Send message
            </button>
        </form>
    </section>
  )
}

export default ContactPage