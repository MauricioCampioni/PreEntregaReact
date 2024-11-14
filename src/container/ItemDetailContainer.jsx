import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../services/firebase/firebaseConfig";
import ItemDetail from '../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const { idItem } = useParams();
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const itemRef = doc(db, "items", idItem);

        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data() });
            }
        });

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [idItem]);

    return (
        <div>
            {loading ? (
                <h4>Cargando...</h4>
            ) : (
                <div>
                    <ItemDetail item={item} />
                </div>
            )}
        </div>
    );
};

export default ItemDetailContainer;
