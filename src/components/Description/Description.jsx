import { StylesImg } from "../../container/Styles";

const Description = ({item})=> {

return (

<div  key={item.id}>
<h4 >{item.nombre}</h4>
<img  style={StylesImg} src={item.img} alt="" />
<h4 >${item.precio}</h4>
 </div>

)}

export default Description;