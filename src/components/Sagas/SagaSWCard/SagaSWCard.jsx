import '../../../css/cardFilter.css'
import { Link } from 'react-router-dom';


const SagaSWCard = ({dataSW}) => {

    return(
        <div className='containerCardSagas'>
            <img className="imgCardFilter" src={dataSW.imagen} alt='foto-portada'/>
            <Link to={`/sagas/star-wars/${dataSW.id}`}><button className='btnCardFilter'>Ver Mas</button></Link> 
        </div>
    )
}

export default SagaSWCard;