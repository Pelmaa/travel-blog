const Team = () => {
  const teamMembers = [
    {
      name: "Pema",
      role: "Founder",
      bio: "Visited 45+ countries, specializes in adventure travel and off-the-beaten-path experiences.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuF9x6VbfIB0lZ-ekgGEY5w06hequThIIGw&s"
    },
    {
      name: "Khenrab",
      role: "Content Creator",
      bio: "Food and culture enthusiast with a knack for finding hidden culinary gems around the world.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuF9x6VbfIB0lZ-ekgGEY5w06hequThIIGw&s"
    },
    {
      name: "Wangchuk",
      role: "Photographer",
      bio: "Capturing breathtaking landscapes and authentic moments from every corner of the globe.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuF9x6VbfIB0lZ-ekgGEY5w06hequThIIGw&s"
    }
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ 
        textAlign: "center", 
        fontSize: "2.5rem",
        marginBottom: "1rem",
        color: "#2c3e50"
      }}>
        Meet the awesome team
      </h2>
      <p style={{
        textAlign: "center",
        fontSize: "1.2rem",
        color: "#7f8c8d",
        marginBottom: "3rem"
      }}>
        We are passionate travelers sharing our stories
      </p>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem"
      }}>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <img 
              src={member.image} 
              alt={member.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover"
              }}
            />
            <div style={{ padding: "1.5rem" }}>
              <h3 style={{ 
                margin: "0 0 0.5rem 0",
                color: "#2c3e50"
              }}>
                {member.name}
              </h3>
              <p style={{
                color: "#e74c3c",
                fontWeight: "500",
                marginBottom: "1rem"
              }}>
                {member.role}
              </p>
              <p style={{ 
                color: "#7f8c8d",
                lineHeight: "1.6"
              }}>
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;