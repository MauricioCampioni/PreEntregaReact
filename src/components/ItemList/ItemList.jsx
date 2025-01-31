import Card from "../Card/Card";
import "../../container/Styles.css";


const ItemList = ({productsStock}) => {
    return (
        
            <div className="cardGridContainer">
                {productsStock.map((product)=>(
                    <div  key={product.id} className="cardItem">
                        <Card product={product}/>
                    </div>
                ))}
            </div>
        
    )
}
export default ItemList;
