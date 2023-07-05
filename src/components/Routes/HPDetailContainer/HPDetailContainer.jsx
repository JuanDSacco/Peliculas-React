import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore,doc,getDoc } from 'firebase/firestore';
import HPDetail from '../../HPDetail/HPDetail';

const HPDetailContainer = () => {

    const [data,setData] = useState([]);
    
    const { id } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'sagaHP', id);
        getDoc(queryDoc)
        .then(res => setData({id:res.id, ...res.data()}))
    },[id]);

    return (
        <div>
            <HPDetail data={data}/>
        </div>
    )
}

export default HPDetailContainer
