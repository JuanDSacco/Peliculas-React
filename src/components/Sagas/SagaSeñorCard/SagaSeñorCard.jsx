import { Link } from 'react-router-dom';
import '../../../css/cardFilter.css'

const SagaSeñorCard = ({dataSS}) => {

    return(
        <div className='containerCardSagas'>
            <img className="imgCardFilter" src={dataSS.imagen} alt='foto-portada'/>
            <Link to={`/sagas/el-señor-de-los-anillos/${dataSS.id}`}><button className='btnCardFilter'>Ver Mas</button></Link>
        </div>
    )
}

export default SagaSeñorCard;