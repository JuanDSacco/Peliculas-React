import '../../css/footer.css'
import ListaRedes from '../ListaRedes/ListaRedes';

const Footer = () => {
    return(
        <>
            <div className='containerFooter'>
                <div>
                    <h1 className='h1Footer'>Contacto</h1>
                    <ul>
                        <li className='listaContactos'>Numero: +54 11 3432 5690</li>
                        <li className='listaContactos'>Email: peliculasclasicas@gmail.com</li>
                        <li className='listaContactos'>Direccion: Av. 9 de Julio 2680</li>
                        <div className='divListaRedes'>
                            <ListaRedes/>
                        </div>
                    </ul>
                </div>
                <div>
                <h2 className='h2Footer'>Todos los derechos reservados por Copyright 2023</h2>
                </div>
            </div>
        </>
    )
}

export default Footer;