import "../styles/globals.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <h1>Wise Wash</h1>
        <p>Your Go-To Pressure Washing Service</p>
        <a href="#contact" className="cta-button">Get a Quote</a>
      </div>

      {/* Services Section */}
      <section id="services">
        <h2>Our Services</h2>
        <div className="service-card">
          <h3>Home Washing</h3>
          <p>We offer professional home pressure washing for exterior cleaning.</p>
        </div>
        <div className="service-card">
          <h3>Driveway Cleaning</h3>
          <p>Get rid of stains and dirt with our top-tier driveway washing services.</p>
        </div>
        <div className="service-card">
          <h3>Deck & Patio Washing</h3>
          <p>Restore your outdoor spaces with our expert deck and patio pressure washing.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows={5}></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
