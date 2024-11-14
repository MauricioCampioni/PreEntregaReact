import { NavLink } from "react-router-dom";
import { cardItemStyle, h4Styles, StylesImg, StyleButton } from "./CardStyles";


const Card =({product})=>{

return (
    <>
    <div style={cardItemStyle} key={product.id}>
    <h4 style={h4Styles} >{product.nombre}</h4>
     <img style={StylesImg} src={product.img} alt="/public/assets/Zapatilla Nike.png" />
     <h4 style={h4Styles} >${product.precio}</h4>
     <NavLink to={`/items/${product.id}`}><button style={StyleButton}>Mostrar mas</button></NavLink>
                        
    <p style={{color:"black"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, fugiat.</p>
    </div>  
    </>
)}

export default Card;