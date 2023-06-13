import '../../css/sagas.css';
import { Link } from "react-router-dom";
import SW from '../../assets/sw_sagas.png'
import HP from '../../assets/hp_sagas.png'
import ESDLA from '../../assets/sdla_final.png'


const Sagas = () => {

    return(
        <>
            <h1 className='h1Sagas'>Sagas</h1>
            <div className='containerSagas'>
                <ul className='ulSagas'>
                    <div className='divSagas'>
                        <img src={ESDLA} alt='portada el señor de los anillos' className='imgPortada'/>
                        <Link to={'/sagas/el-señor-de-los-anillos'}><li>El Señor de los Anillos</li></Link>
                        </div>
                    <div className='divSagas'>
                        <img src={SW} alt='portada Star Wars' className='imgPortada'/>
                        <Link to={'/sagas/star-wars'}><li>Star Wars</li></Link>
                    </div>
                    <div className='divSagas'>
                        <img src={HP} alt='portada Harry Potter' className='imgPortada'/>
                        <Link to={'/sagas/harry-potter'}><li>Harry Potter</li></Link>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Sagas;