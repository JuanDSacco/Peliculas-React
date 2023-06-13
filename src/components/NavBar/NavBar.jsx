import { Link } from "react-router-dom";
import '../../css/navBar.css';

const NavBar = () => {
    return(
            <nav>
                <ul id="mainAncaljeFixed" className="ulNavBar">
                    <Link to={'/'}><li className="liNavBarPrin">Pelis<span className="spanTitulo">Clásicas</span></li></Link>
                    <Link to={'/sagas'}><li className="liNavBar">Sagas</li></Link>
                    <Link to={'/nosotros'}><li className="liNavBar">Detalles</li></Link>
                    <li className="liNavBar">DarkMode</li>
                </ul>
            </nav>          
    )
} 

export default NavBar;