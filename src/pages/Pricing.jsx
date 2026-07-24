import "../styles/pricing.css";

function Pricing() {

const plans=[
{
name:"Starter",
price:"$19",
users:"Up to 5 Users"
},
{
name:"Professional",
price:"$49",
users:"Up to 25 Users"
},
{
name:"Enterprise",
price:"Custom",
users:"Unlimited Users"
}
];

return(

<main className="pricing">

<h1>Simple Pricing</h1>

<p>
Choose the plan that grows with your business.
</p>

<div className="pricing-grid">

{plans.map((plan,index)=>(

<div className="price-card" key={index}>

<h2>{plan.name}</h2>

<h3>{plan.price}</h3>

<p>{plan.users}</p>

<button>
Choose Plan
</button>

</div>

))}

</div>

</main>

);

}

export default Pricing;