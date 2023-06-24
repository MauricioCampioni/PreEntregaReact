import Description from "../Description/Description";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({item}) =>{
    return(
        <>
        <Description item={item}/>
        <ItemCount initial="1" product={item} stock={item.stock}/>
        </>
    )
}

export default ItemDetail;