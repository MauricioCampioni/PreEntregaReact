// import {collection, getDocs} from 'firebase/firestore'
// import { db } from '../../services/firebase/firebaseConfig';
// import React, { useState, useEffect } from "react";



// function SeacrhBar() {
//     const [products, setProducts] = useState([]);
//     const [searchProduct, setSearchProduct] = useState("");
//     const [filteredProducts, setFilteredProducts] = useState([]);

//     //Obtengo productos desde el firestore

// useEffect (() => {
//     const fetchProducts = async () => {
//         const productsCollection = collection(db, "items");
//         const productSnapshot = await getDocs(productsCollection);
//         const ProductList = productSnapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data()
//         }));
//         setProducts(ProductList);
//         console.log(ProductList);
//         setFilteredProducts(ProductList); //Muestra los productos al principio
//     };

//     fetchProducts();
    
// }, []); // TODO INVESTIGAR COMO AGREGAR DEPENDENDECIA PARA QUE ME RENDERICE LOS PRODUCTOS CUANDO BUSCO LOS PRODUCTOS

// const handleSearchChange = (event) => {
//     setSearchProduct(event.target.value);
// }



// const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//         console.log("Detecto el enter")
//         event.preventDefault(); //El formulario no se recarga
//         const results = products.filter(product =>
//             product.nombre.toLowerCase().includes(searchProduct.toLowerCase())
//         );
//         setFilteredProducts(results);
//         console.log(results)
//          // Actualiza los productos que busque
//     }
// };



//     return (
//         <div className='containerInput'>
//             <input
//                 type='text'
//                 className='form-control'
//                 placeholder='Busqueda...'
//                 value={searchProduct}
//                 onChange={handleSearchChange}
//                 onKeyDown={handleKeyDown} // Escucha la accion de la tecla
//               />
            
//         </div>
//     );
// }
// export default SeacrhBar;
