import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";

const countries = {
  bhutan: {
    name: "Bhutan",
    description: "Land of the Happiness",
  },
  nepal: {
    name: "Nepal",
    description: "Land of the Himalayas.",
  },
  japan: {
    name: "Japan",
    description: "Land of the Rising Sun.",
  },
  italy: {
    name: "Italy",
    description: "Land of Pizza and Pasta.",
  },
};

const CountryDetail = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Start loading
    const timer = setTimeout(() => {
      setCountry(countries[id]);
      setLoading(false); // Stop loading
    }, 500);

    return () => clearTimeout(timer); // Cleanup
  }, [id]);

  return (
    <>
      <Navbar />
      <div
        style={{
          justifyContent: "center",
          padding: "5rem",
          textAlign: "center",
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : country ? (
          <>
            <h2>{country.name}</h2>
            <p>{country.description}</p>
            <Link
              to="/countries"
              style={{
                position: "absolute",
                top: "0.358rem",
                right: "1rem",
                padding: "1rem",
                marginTop: "2rem",
                fontWeight: "800",
              }}
            >
              <button>X</button>
            </Link>
          </>
        ) : (
          <p>
            <Link
              to="/countries"
              style={{
                position: "absolute",
                top: "0.358rem",
                right: "1rem",
                padding: "1rem",
                marginTop: "2rem",
                fontWeight: "800",
              }}
            >
              <button>X</button>
            </Link>
            Country not found.
          </p>
        )}
      </div>
    </>
  );
};

export default CountryDetail;
