import "../styles/product.css";
function Product() {
  const features = [
    {
      title: "Lead Management",
      desc: "Capture, organize and nurture every lead from one dashboard."
    },
    {
      title: "Sales Automation",
      desc: "Automate repetitive follow-ups and reminders."
    },
    {
      title: "Analytics",
      desc: "Visualize business growth with real-time reports."
    },
    {
      title: "Team Collaboration",
      desc: "Assign tasks and keep your sales team aligned."
    },
    {
      title: "Email Integration",
      desc: "Connect Gmail and Outlook in minutes."
    },
    {
      title: "Security",
      desc: "Enterprise-grade encryption and daily backups."
    }
  ];

  return (
    <main className="page">
      <section className="page-hero">
        <h1>Everything You Need To Close More Deals</h1>

        <p>
          Nexora CRM combines sales, customer management,
          automation and analytics into one simple platform.
        </p>
      </section>

      <section className="feature-grid">
        {features.map((item,index)=>(
          <div className="feature-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Product;