import '../../../css/cardFilter.css'

const SagaSWCard = ({dataSS}) => {

    return(
        <div className='containerCardSagas'>
            <img className="imgCardFilter" src={dataSS.imagen} alt='foto-portada'/>
            <button className='btnCardFilter'>Ver Mas</button>
        </div>
    )
}

export default SagaSWCard;