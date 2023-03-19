import { Link } from "react-router-dom";
import '../../css/navBar.css';

const NavBar = () => {
    return(
            <nav>
                <ul className="ulNavBar">
                    <Link to={'/'}><li className="liNavBar">Home</li></Link>
                    <Link to={'/peliculas'}><li className="liNavBar">Peliculas</li></Link>
                    <Link to={'/sagas'}><li className="liNavBar">Sagas</li></Link>
                    <Link to={'/nosotros'}><li className="liNavBar">Nosotros</li></Link>
                </ul>
            </nav>          
    )
} 

export default NavBar;