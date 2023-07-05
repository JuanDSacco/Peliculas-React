import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore,doc,getDoc } from "firebase/firestore";
import SWDetail from "../../SWDetail/SWDetail";

const SWDetailContainer = () => {

    const [data,setData] = useState([]);
    
    const { id } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'sagaSW', id);
        getDoc(queryDoc)
        .then(res => setData({id:res.id, ...res.data()}))
    },[id]);

    return (
        <div>
            <SWDetail data={data}/>
        </div>
    )
}

export default SWDetailContainer
