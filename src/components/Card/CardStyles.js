const cardGridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 5 elementos por fila
    gap: "20px", // Espacio entre las tarjetas
    padding: "20px",
  };
  
  
  const h4Styles = {
    fontSize: "1.2rem",
    color: "#333",
    margin: "10px 0",
  };
  
   const StylesImg = {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
    objectFit: "cover",
    
  };
  
  const StyleButton = {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

export {cardGridContainerStyle,h4Styles,StylesImg,StyleButton
  };