const PropertyCard = ({ property }) => (
  <div className="card">
    <img src={property.image_url} alt={property.title} />
    <div className="card-body">
      <div className="tags">
        {property.available == 1 && <span className="tag">Available</span>}
        {property.long_term == 1 && <span className="tag">Long-Term</span>}
        {property.short_term == 1 && <span className="tag">Short-Term</span>}
      </div>
      <div className="price">${property.price}</div>
      <h3>{property.title}</h3>
      <div className="details">
        Beds: {property.beds} | Baths: {property.baths} | {property.sqm} sqm
      </div>
    </div>
  </div>
);

const App = () => {
  const [properties, setProperties] = React.useState([
    {
      id: 1,
      title: "Bright 2 Bedroom Apartment",
      price: 760,
      beds: 2,
      baths: 2,
      sqm: 120,
      image_url: "images/apt1.jpg",
      long_term: 1,
      short_term: 1,
      available: 1
    },
    {
      id: 2,
      title: "Top-Floor Apartment with Balcony",
      price: 760,
      beds: 2,
      baths: 2,
      sqm: 110,
      image_url: "images/apt2.jpg",
      long_term: 1,
      short_term: 1,
      available: 1
    },
    {
      id: 3,
      title: "Affordable 1BR Apartment",
      price: 400,
      beds: 1,
      baths: 1,
      sqm: 55,
      image_url: "images/apt3.jpg",
      long_term: 1,
      short_term: 0,
      available: 1
    }
  ]);

  return (
    <div className="property-listing">
      {properties.map((prop) => (
        <PropertyCard key={prop.id} property={prop} />
      ))}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
