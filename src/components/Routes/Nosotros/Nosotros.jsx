import '../../../css/detalles.css'

const Nosotros = () => {
    return(
        <>
            <div className="divDetalles">
                <p className="pDetalles">
                    El archivo fue generado con create-react-app. Generé un Context donde utilicé Hooks para traer data {'(título, imagen, sinopsis y trhiller)'} desde Firebase/Firestore inyectada en el index y cada una de la pagina de las sagas. {'(son 4 colecciones por separado)'}. En este punto quiero aclarar que utilizar Context para este proyecto no fue, ni es lo mas adecuado a mi entender, la respuesta a esto es que la página fui desarrollándola a medida que las ideas surgían {'(suelo planificar contenido, estructura y estilo previo a comenzar, pero esta app tenia la única finalidad de repasar conceptos. Empezó a tomar forma y opté por terminarla)'}. El estilo fue aplicado con css, en los botones de la barra de navegación utilicé cattocss {'https://www.cattocss.com'} y Animate css {'https://animate.style'}. 
                </p>
            </div>
        </>
    )
}

export default Nosotros;