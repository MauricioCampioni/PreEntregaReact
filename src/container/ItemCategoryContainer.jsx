import React, {useEffect, useState} from "react";
import { NavLink, useParams} from "react-router-dom";
import {h4Styles, StylesImg, StyleButton} from "../components/Card/CardStyles";
import "./Styles.css";
import {getDocs, collection, query, where} from 'firebase/firestore'
import { db } from "../services/firebase/firebaseConfig";



const ItemCategoryContainer =()=>{

    const {CategoryId}=useParams();
    const [filteredProducts,setFilteredProducts]=useState([]);
    const [loading,setLoading]= useState(true);

     


    useEffect(()=>{
        setLoading(true)
        
        const q=query(collection(db,"items"),
        where("CategoryId","==",parseInt(CategoryId))
        )

        getDocs(q).then((snapshot)=>{
            if(snapshot.size===0) console.log("No results")
            else
                setFilteredProducts(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})));
        });

        setTimeout(()=>{
            setLoading(false)
           },2000)

    },[CategoryId]);
    


    return (
        <div>
            {loading ? 
            <h4>Cargando...</h4> :
            <>
            <div className="cardGridContainer">
                {filteredProducts.map((product)=>(     
                    <div className="cardItem" key={product.id}>
                        <h4 style={h4Styles}>{product.nombre}</h4>
                        <img style={StylesImg} src={product.img} alt="" />
                        <h4 style={h4Styles}>${product.precio}</h4>
                        <NavLink to={`/items/${product.id}`}><button style={StyleButton} >Mostrar Mas</button></NavLink>
                        <p style={{color:"black"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, fugiat.</p>
                    </div>
                ))}
            </div>
        </>}
    </div>
    )
}
export default ItemCategoryContainer