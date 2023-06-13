import '../../css/cardFilter.css'

const CardFilter = ({movie}) => {
    return(
        <section className='sectionCard'>
            <div className='containerCard' style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
                <img className="imgCardFilter" src={movie.imagen} alt='foto-portada'/>
                <button className='btnCardFilter'>Ver Mas</button>
            </div>
        </section>
    )
}

export default CardFilter;