import '../../css/sagas.css';
import { Link } from "react-router-dom";


const Sagas = () => {

    return(
        <div className='containerSagas'>
            <ul className='ulSagas'>
                <div className='divSagas'>
                <Link to={'/sagas/el-señor-de-los-anillos'}><li>El Señor de los Anillos</li></Link>
                </div>
                <div className='divSagas'>
                <Link to={'/sagas/starwars'}><li>Star Wars</li></Link>
                </div>
                <div className='divSagas'>
                <Link to={'/sagas/harrypotter'}><li>Harry Potter</li></Link>
                </div>
            </ul>
        </div>
    )
}

export default Sagas;