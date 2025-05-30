import Navbar from "../../components/Navbar";
import Team from "./components/Team";

const About = () => {
  return (
    <div style={ {
       justifyContent: "center",
        padding: "5rem",
        textAlign:"center"
    }}>
      <Navbar />
      <div><h2>Our Team</h2></div>
      <Team/>
    </div>
  );
};

export default About;
