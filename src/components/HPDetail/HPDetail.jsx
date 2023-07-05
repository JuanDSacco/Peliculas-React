import React from 'react'
import '../../css/itemDetail.css'

const HPDetail = ({data}) => {

    return (
        <div className='divDetail'>
            <h1 className='h1Detail'>{data.titulo}</h1>
            <img src={data.imagen} alt="foto-portada" className='imgDetail'/>
            <h2>Sinopsis:</h2>
            <p className='pDetail'>{data.resumen}</p>
            <a href={data.trhiller} className='trhillerDetail'>Ver Trhiller</a>
        </div>
    )
}

export default HPDetail
