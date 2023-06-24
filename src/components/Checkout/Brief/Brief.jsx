const Brief=({order})=>{
    return(
        <div  >
            <div  >
                <h2>Detalle de compra</h2>
                <h4>Comprador : {order.buyer.name}</h4>
                <div >
                {   
                    order.items.map((cartItem)=>(
                        <div  key={cartItem.id} >
                            <h4>{cartItem.item.name}</h4>
                            <h4>Unidad/es: {cartItem.qty}</h4>
                            <h4>Precio x unidad : ${cartItem.item.precio}</h4>
                        </div>
                    ))
                }
                </div>     
                    
            </div>
           
        </div>
    )
}
export default Brief;