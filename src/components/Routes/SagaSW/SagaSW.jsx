import SagaSWCard from "../../Sagas/SagaSWCard/SagaSWCard";
import '../../../css/sagasCard.css'
import { useMovieContext } from "../../../context/MovieContext";

const SagaSW = () => {
    
    const {dataSW} = useMovieContext();

    return(
        <>
            <div>
                <h1 className="h1Sagas">Saga StarWars</h1>
            </div>
            <div className="cardContainerSagas">
                {dataSW.map((dataSW) => (
                    <SagaSWCard dataSW={dataSW} key={dataSW.id}/>
                ))}
            </div>
        </>
    )
}

export default SagaSW;