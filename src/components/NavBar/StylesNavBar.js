const StyleNavBar = {
    fontSize: "20px",
    display: "flex",
    alignItems: "center",         // corregido de "right" a "center" para mejor alineación
    justifyContent: "space-evenly",
    backgroundColor: "Orange",
    listStyle: "none",
    height: "40px",
};

// Al aplicarlo a cada enlace
const linkStyle = {
    textDecoration: "none",
    color: "black",              // Ajusta el color según prefieras
};

export {StyleNavBar, linkStyle}
