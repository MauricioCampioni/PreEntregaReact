import "./NavBar.css"

const navbarStyle = {
  backgroundColor: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 2rem",
};

// Estilo para el título del navbar
const navbarTitleStyle = {
  color: "#fff",
  fontSize: "2.5rem",
  textDecoration: "none",
  fontFamily: 'Roboto, sans-serif',
  fontWeight: "bold",
  marginRight: "2rem",
};

// Estilo para el contenedor del input de búsqueda
const containerInputStyle = {
  flexGrow: 1,
  maxWidth: "500px",
};

// Estilo para el input de búsqueda
const searchInputStyle = {
  width: "100%",
  padding: "0.5rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

// Estilo para el menú del navbar (lista de enlaces)
const navbarMenuStyle = {
  display: "flex",
  listStyle: "none",
  gap: "1rem",
  margin: 0,
  padding: 0,
  alignItems: "center",
};

// Estilo para los enlaces del navbar
const navbarLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.1rem",
  padding: "0.5rem",
  fontFamily: 'Roboto, sans-serif',
  transition: "color 0.3s ease, backgroundColor 0.3s ease",
};

export {navbarStyle, navbarLinkStyle, navbarMenuStyle, navbarTitleStyle, searchInputStyle, containerInputStyle}