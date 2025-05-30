import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ReactCountryFlag from "react-country-flag";

const Countries = () => {
  const countries = [
    { name: "Bhutan", id: "bhutan", },
    { name: "Nepal", id: "nepal", },
    { name: "Japan", id: "japan", },
    { name: "Korea", id: "korea", },
    {
      name: "Italy",
      id: "italy",
      description: "A beautiful city in Japan",
    },
  ];

  return (
    <>
      <Navbar />
      <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem",
  
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "3rem",textAlign:"center" }}>  Must-Visit Countries</h1>

        <div style={{display:"flex", justifyContent:"space-between"}}>
          
                 {countries.map((country) => (
                   <div 
                   key={country.id} style={{ fontWeight: "bold", fontSize: "1.1rem", textAlign:"center"}}> 
                    <Link to={`/countries/${country.id}`}>{country.name}
                    <div>
                      <ReactCountryFlag 
  countryCode={country.id === 'nepal' ? 'NP' : country.id === 'japan' ? 'JP' :country.id === 'bhutan' ? 'BT': country.id === 'korea' ? 'KR': 'IT'}
  svg
  style={{
    width: '10rem',
    height: '10rem',
    marginBottom: '1rem'
  }}
/></div></Link>
                </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Countries;
