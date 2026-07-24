import "../styles/contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-header">
        <h1>Let's Talk</h1>
        <p>
          Have questions about Nexora CRM? We'd love to hear from you.
        </p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <div className="info-box">
            <h3>Email</h3>
            <p>hello@nexoracrm.com</p>
          </div>

          <div className="info-box">
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>

          <div className="info-box">
            <h3>Office</h3>
            <p>San Francisco, California</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />

          <input type="email" placeholder="Email Address" required />

          <input type="text" placeholder="Company" />

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;