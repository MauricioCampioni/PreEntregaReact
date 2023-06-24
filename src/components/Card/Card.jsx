import { StyleButton,StylesImg, h4Styles} from "../../container/Styles";
import { NavLink } from "react-router-dom";


const Card =({product})=>{

return (
    <>
    <div  key={product.id}>
    <h4 style={h4Styles} >{product.nombre}</h4>
     <img style={StylesImg} src={product.img} alt="" />
     <h4 style={h4Styles} >${product.precio}</h4>
     <NavLink to={`/items/${product.id}`}><button style={StyleButton}>Mostrar mas</button></NavLink>
                        
    <p style={{color:"black"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, fugiat.</p>
    </div>  
    </>
)}

export default Card;