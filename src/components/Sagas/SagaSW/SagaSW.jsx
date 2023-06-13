import SagaSWCard from "../SagaSWCard/SagaSWCard";
import '../../../css/sagasCard.css'

const SagaSW = ({dataSS}) => {
    
    return(
        <>
            <div>
                <h1 className="h1Sagas">Saga StarWars</h1>
            </div>
            <div className="cardContainerSagas">
                {dataSS.map((dataSS) => (
                    <SagaSWCard dataSS={dataSS} key={dataSS.id}/>
                ))}
            </div>
        </>
    )
}

export default SagaSW;