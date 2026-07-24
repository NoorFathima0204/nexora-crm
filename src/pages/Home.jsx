import "./../styles/home.css";

function Home() {
  const features = [
    {
      title: "Smart Contact Management",
      description:
        "Manage all customer interactions in one centralized dashboard."
    },
    {
      title: "Sales Pipeline",
      description:
        "Track every deal from lead generation to successful conversion."
    },
    {
      title: "Analytics Dashboard",
      description:
        "Gain real-time insights with powerful reports and business metrics."
    }
  ];

  const stats = [
    { value: "10K+", label: "Businesses" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Support" },
    { value: "99.9%", label: "Uptime" }
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="badge">Trusted by Growing Businesses</span>

          <h1>
            Grow Smarter with
            <span> Nexora CRM</span>
          </h1>

          <p>
            Simplify customer relationships, automate sales workflows,
            and accelerate business growth with one powerful CRM platform.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Free Trial
            </button>

            <button className="secondary-btn">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="dashboard-card">
            <h3>Sales Dashboard</h3>

            <div className="chart"></div>

            <div className="mini-cards">
              <div>
                <h4>Revenue</h4>
                <p>$128K</p>
              </div>

              <div>
                <h4>Leads</h4>
                <p>1,254</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">

        <h2>Everything Your Sales Team Needs</h2>

        <p className="section-text">
          Powerful tools designed to improve productivity,
          customer engagement, and revenue.
        </p>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>

      </section>

      <section className="stats">

        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </div>
        ))}

      </section>

      <section className="cta">

        <h2>Ready to Transform Your Business?</h2>

        <p>
          Join thousands of companies using Nexora CRM
          to manage customers and boost sales.
        </p>

        <button className="primary-btn">
          Get Started Today
        </button>

      </section>
    </>
  );
}

export default Home;