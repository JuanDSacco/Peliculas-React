import '../../../css/cardFilter.css'

const SagaSWCard = ({dataSW}) => {

    return(
        <div className='containerCardSagas'>
            <img className="imgCardFilter" src={dataSW.imagen} alt='foto-portada'/>
            <button className='btnCardFilter'>Ver Mas</button>
        </div>
    )
}

export default SagaSWCard;