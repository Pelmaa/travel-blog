import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <div  style={ {
       justifyContent: "center",
        padding: "5rem",
        textAlign:"center"
    }}>
      <Navbar />
      <div>404 Page Not Found</div>
    </div>
  );
};

export default NotFound;
