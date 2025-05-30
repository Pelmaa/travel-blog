import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
   const { userName } = useAuth();
  return (
    <div style={ {
       justifyContent: "center",
        padding: "5rem",
        textAlign:"center"
    }}>
      <Navbar />
      <h2 >Profile Page</h2>
         <p>Welcome, <strong>{userName}</strong>!</p>
         <p><strong>Member Since:</strong> {new Date().toLocaleDateString()}</p>

        <p>This is your personal profile area.</p>
    </div>
  );
};

export default Profile;
