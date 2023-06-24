import Card from "../Card/Card";
const ItemList = ({productsStock}) => {
    return (
        
                productsStock.map((product)=>(
                    <div  key={product.id}>
                        <Card product={product}/>
                    </div>
                ))
        
    )
}

export default ItemList;
