import '../../css/footer.css'
import ListaRedes from '../ListaRedes/ListaRedes';

const Footer = () => {
    return(
        <>
            <div className='containerFooter'>
                <div>
                    <h1>Contactanos</h1>
                    <ul>
                        <li className='listaContactos'>Numero: +54 11 3432 5690</li>
                        <li className='listaContactos'>Email: peliculasclasicas@gmail.com</li>
                        <li className='listaContactos'>Direccion: Av. 9 de Julio 2680</li>
                        <div style={{paddingTop:'5px'}}>
                            <ListaRedes/>
                        </div>
                    </ul>
                </div>
            <div><h2 style={{fontSize:'16px'}}>Todos los derechos reservados por Copyright 2023</h2></div>
            </div>
        </>
    )
}

export default Footer;