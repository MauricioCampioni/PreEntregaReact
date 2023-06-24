import { ButtonSelectorStyle } from "./ItemQuantitySelectorStyle";

const ItemQuantitySelector= ({handlerIncreaseCount, handlerDecreaseCount, counter}) => {

    return (

        <div>
            <button style={ButtonSelectorStyle} onClick={()=>handlerDecreaseCount(counter)}>-</button>
            {counter}
            <button style={ButtonSelectorStyle} onClick={()=>handlerIncreaseCount(counter)}>+</button>
            
        </div>
    )
}
export default ItemQuantitySelector;



