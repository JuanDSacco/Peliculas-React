import { Link } from "react-router-dom";
import '../../css/navBar.css';
import 'animate.css'

const NavBar = () => {

    return(
        <div>
                <nav>
                <ul id="mainAncaljeFixed" className="ulNavBar">
                    <Link to={'/'}><li className="liNavBarPrin">Pelis<span className="spanTitulo">Clásicas</span></li></Link>
                    <Link to={'/sagas'}><li className="animate__animated animate__rubberBand" id="liNavBar">Sagas</li></Link>
                    <Link to={'/detalles'}><li className="animate__animated animate__rubberBand" id="liNavBar">Detalles</li></Link>
                </ul>
                </nav>
        </div>
    )
} 

export default NavBar;