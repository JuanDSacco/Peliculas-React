import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore,doc,getDoc } from 'firebase/firestore';
import ESDLADetail from '../../ESDLADetail/ESDLADetail';

const ESDLADetailContainer = () => {

    const [data,setData] = useState([]);
    
    const { id } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'sagaESDLA', id);
        getDoc(queryDoc)
        .then(res => setData({id:res.id, ...res.data()}))
    },[id]);

    return (
        <div>
            <ESDLADetail data={data}/>
        </div>
    )
}

export default ESDLADetailContainer
