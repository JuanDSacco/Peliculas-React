import { Link } from 'react-router-dom';
import '../../../css/cardFilter.css'

const SagaHPCard = ({dataHP}) => {

    return(
        <div className='containerCardSagas'>
            <img className="imgCardFilter" src={dataHP.imagen} alt='foto-portada'/>
            <Link to={`/sagas/harry-potter/${dataHP.id}`}><button className='btnCardFilter'>Ver Mas</button></Link>
        </div>
    )
}

export default SagaHPCard;