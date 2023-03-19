import {useState} from 'react';
import { useMovieContext } from '../../../context/MovieContext';
import CardFilter from '../../CardFilter/CardFilter';

const FilterMovies = () => {

    const {data} = useMovieContext();

    const [buscar, setBuscar] = useState('');

    const handleChange = (ev) => {
        setBuscar(ev.target.value);
    };

    const filteredMovies = data.filter((movie) => movie.titulo.toLowerCase().includes(buscar.toLowerCase()))

    return(
        
        <div style={{textAlign:'center'}}>
            <h1 style={{paddingBottom:'15px'}}>Escribi tu pelicula favorita en el buscador para ver mas detalles</h1>
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