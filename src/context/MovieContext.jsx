import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

//Creo el contexto
const MovieContext = React.createContext([])

//Creo hook para inicializar nuestro contexto 
export const useMovieContext = () => useContext(MovieContext);

//Crear el provider 
const MovieProvider = ({children}) => {

    const [data,setData] = useState([])
    const {categoriaId} = useParams()

    /* Extraigo data para FilterMovies */

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'items')
        
        if(categoriaId){
            const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryFilter)
            .then(res => setData(res.docs.map(data => ({id:data.id, ...data.data()}))))
        }else{
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(data => ({id:data.id, ...data.data()}))))
        }
    },[categoriaId]);

    /* Extraigo data para Señor de los anillos */

    const [dataSS,setDataSS] = useState([])
    const { categoriaIdSS } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'sagaESDLA')

        if(categoriaIdSS){
            const queryFilter = query(queryCollection, where('categoria', '==', categoriaIdSS))
            getDocs(queryFilter)
            .then(res => setDataSS(res.docs.map(data => ({id:data.id, ...data.data()}))))
        }else{
            getDocs(queryCollection)
            .then(res => setDataSS(res.docs.map(data => ({id: data.id, ...data.data()}))))
        }
    },[categoriaIdSS]);

    /* Extraigo data para Harry Potter */

    const [dataHP,setDataHP] = useState([])
    const { categoriaIdHP } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'sagaHP')

        if(categoriaIdHP){
            const queryFilter = query(queryCollection, where('categoria', '==', categoriaIdHP))
            getDocs(queryFilter)
            .then(res => setDataHP(res.docs.map(data => ({id:data.id, ...data.data()}))))
        }else{
            getDocs(queryCollection)
            .then(res => setDataHP(res.docs.map(data => ({id: data.id, ...data.data()}))))
        }
    },[categoriaIdHP])

    /* Extraigo data para StartWars */

    const [dataSW,setDataSW] = useState([]);
    const {categoriaIdSW} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'sagaSW')

        if(categoriaIdSW){
            const queryFilter = query(queryCollection, where('categoria', '==', categoriaIdSW))
            getDocs(queryFilter)
            .then(res => setDataSW(res.docs.map(data => ({id:data.id, ...data.data()}))))
        }else{
            getDocs(queryCollection)
            .then(res => setDataSW(res.docs.map(data => ({id: data.id, ...data.data()}))))
        }
    },[categoriaIdSW])

    return(
        <MovieContext.Provider value={{data,dataSS,dataHP,dataSW}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider;