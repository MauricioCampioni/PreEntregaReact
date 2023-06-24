import { useState } from "react"
import { ButtonSubmitStyle, InputStyle, LabelStyle, divCheckoutForm, divSize, h1CheckoutStyle} from "./CheckoutFormStyle"

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState ('')
    const [phone, setPhone] = useState ('')
    const [email, setEmail] = useState ('')
    const [loading,setLoading]= useState(true);

    const handleConfirm = (event) => {
        event.preventDefault()
        
        const userData = {
            name, phone, email
        }
        
        onConfirm (userData)
    }
    setTimeout(()=>{
        setLoading(false)
        
       },2000)

    return(
        <>
        {loading ?  
        <h4>Cargando...</h4> :
        
        <>
        <h1 style={h1CheckoutStyle} >Checkout</h1>
        <div style={divSize}>
        <div style={divCheckoutForm}>
            <form onSubmit={handleConfirm}>
                <label style={LabelStyle}>
                Nombre:
                <input style={InputStyle}
                required
                type='text'
                value={name}
                onChange={({target}) => setName (target.value)}
                />
                </label >
                <label style= {LabelStyle}>
                    Telefono:
                <input style={InputStyle}
                required
                type='number'
                value={phone}
                onChange={({target})=> setPhone (target.value)}
                />
                </label >
                <label style={LabelStyle}>
                    Email:
                <input style={InputStyle}
                required
                type='email'
                value={email}
                onChange= {({target}) => setEmail (target.value)}
                />
                </label>

                <div>
                    <button style={ButtonSubmitStyle} type='submit' >Crear Orden</button>
                </div>
                </form>
        </div>
        </div>
        </>
        }
        </>
    )
}

export default CheckoutForm;

