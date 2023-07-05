import {useState} from 'react';
import { useMovieContext } from '../../../context/MovieContext';
import CardFilter from '../../CardFilter/CardFilter';
import '../../../css/filterMovies.css'
import Portada from '../../../assets/swportada.jpg'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const FilterMovies = () => {

    const {data} = useMovieContext();

    const [buscar, setBuscar] = useState('');

    const handleChange = (ev) => {
        setBuscar(ev.target.value);
    };

    const filteredMovies = data.filter((movie) => movie.titulo.toLowerCase().includes(buscar.toLowerCase()))

    const handleClick = () => {
        const mainILC = document.getElementById('mainAncaljeFixed');
        mainILC.scrollIntoView({behavior: 'smooth'})
    }

    return(
        <div className='FilterContainer'>
            <div>
                <img src={Portada} alt='portada de inicio' className='imgPortadaHome'/>
            </div>
            <div>
                <button className='btnFixed' onClick={handleClick}><FontAwesomeIcon icon={faUpLong}/></button>
            </div>
            <h1 className='h1Filter'>Escribe tu película favorita en el buscador para ver más detalles</h1>
            <div style={{paddingBottom:'50px'}}>
                <input style={{width:'300px'}} type='text' value={buscar} onChange={handleChange}/>
            </div>
            <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
                {filteredMovies.map((movie) => (
                    <span key={movie.id}><CardFilter movie={movie}/></span>  
                ))}
            </div>
        </div>
    )
}

export default FilterMovies;