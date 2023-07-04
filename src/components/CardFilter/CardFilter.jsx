import '../../css/cardFilter.css'
import { Link } from 'react-router-dom';

const CardFilter = ({movie}) => {
    return(
        <section className='sectionCard'>
            <div className='containerCard'>
                <img className="imgCardFilter" src={movie.imagen} alt='foto-portada'/>
                <Link to={`/pelicula/${movie.id}`}><button className='btnCardFilter'>Ver Mas</button></Link>
            </div>
        </section>
    )
}

export default CardFilter;