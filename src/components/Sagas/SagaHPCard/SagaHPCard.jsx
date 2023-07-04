import '../../../css/cardFilter.css'

const SagaHPCard = ({dataHP}) => {

    return(
        <div className='containerCardSagas'>
            <img className="imgCardFilter" src={dataHP.imagen} alt='foto-portada'/>
            <button className='btnCardFilter'>Ver Mas</button>
        </div>
    )
}

export default SagaHPCard;