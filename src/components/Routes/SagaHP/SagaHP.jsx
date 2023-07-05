import SagaHPCard from '../../Sagas/SagaHPCard/SagaHPCard'
import { useMovieContext } from "../../../context/MovieContext"

const SagaHP = () => {
    
    const {dataHP} = useMovieContext()

    return(
        <>
            <div>
                <h1 className="h1Sagas">Saga Harry Potter</h1>
            </div>
            <div className="cardContainerSagas">
                {dataHP.map((dataHP) => (
                    <SagaHPCard dataHP={dataHP} key={dataHP.id}/>
                    ))}
            </div>
        </>
    )
}

export default SagaHP;