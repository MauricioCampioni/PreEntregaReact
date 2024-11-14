import Card from "../Card/Card";
import { cardGridContainerStyle } from "../Card/CardStyles";

const ItemList = ({productsStock}) => {
    return (
        <div style={cardGridContainerStyle}>
                {productsStock.map((product)=>(
                    <div  key={product.id}>
                        <Card product={product}/>
                    </div>
                ))}
        </div>
    )
}
export default ItemList;
