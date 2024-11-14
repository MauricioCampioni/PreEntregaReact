import "./NavBar.css"

const navbarStyle = {
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    
    padding: "1rem 2rem",
  };
  
const navbarTitleStyle = {
    color: "#fff",
    fontSize: "2.5rem",
    textDecoration: "none",
    fontFamily: 'Roboto',
    fontWeight: "bold",
  };
  
const containerInputStyle = {
    flexGrow: 1,
    margin: "0 1.5rem",

  };
  
const searchInputStyle = {
    width: "100%",
    maxWidth: "500px",
    padding: "0.5rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };
  
const navbarMenuStyle = {
    display: "flex",
    listStyle: "none",
    gap: "1rem",
    margin: 0,
    padding: 0,
  };
  
const navbarLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.1rem",
    padding: "0.5rem",
    fontFamily: 'Roboto',
    transition: "color 0.3s ease, backgroundColor 0.3s ease",
  };
  

export {navbarStyle, navbarLinkStyle, navbarMenuStyle, navbarTitleStyle, searchInputStyle, containerInputStyle}