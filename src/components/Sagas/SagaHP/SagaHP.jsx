import SagaHPCard from "../SagaHPCard/SagaHPCard"
import '../../../css/sagasCard.css'

const SagaHP = ({dataSS}) => {
    
    return(
        <>
            <div>
                <h1 className="h1Sagas">Saga Harry Potter</h1>
            </div>
            <div className="cardContainerSagas">
                {dataSS.map((dataSS) => (
                    <SagaHPCard dataSS={dataSS} key={dataSS.id}/>
                    ))}
            </div>
        </>
    )
}

export default SagaHP