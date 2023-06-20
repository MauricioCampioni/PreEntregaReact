import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { StylesImg } from "./Styles";
import ItemCount from "../components/ItemCount/ItemCount";
import {getDoc, doc} from 'firebase/firestore'
import { db } from "../services/firebase/firebaseConfig";





const ItemDetailContainer =()=>{
    
    const {idItem}=useParams();

    const [item, setItem] = useState();

    const [loading,setLoading]= useState(true);
    
    useEffect (() => {
        
        const itemRef = doc (db, "items", idItem)
        
        getDoc(itemRef).then((snapshot)=>{
            if(snapshot.exists()){
                setItem({id:snapshot.id,...snapshot.data()});
                
            }
        });
        setTimeout(()=>{
            setLoading(false)
            
           },2000)

    },[item])

    

    
    
    return (
            <div>
                {loading ? 
            <h4>Cargando...</h4> :
            
            <>
                 
                    {<div  key={item.id}>
                        <h4 >{item.nombre}</h4>
                        <img  style={StylesImg} src={item.img} alt="" />
                        <h4 >{item.precio}</h4>
                    <ItemCount initial="1" product={item} stock={item.stock}></ItemCount>
                
                    </div> }
                    
                
            </>}
            </div>
    )
}
export default ItemDetailContainer