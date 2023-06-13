import SagaSeñorCard from "../SagaSeñorCard/SagaSeñorCard";


const SagaSeñor = ({dataSS}) => {
    
    return(
        <>
            <div>
                <h1 className="h1Sagas">Saga El Señor de los anillos</h1>
            </div>
            <div className="cardContainerSagas">
                {dataSS.map((dataSS) => (
                    <SagaSeñorCard dataSS={dataSS} key={dataSS.id}/>
                    ))}
            </div>
        </>
    )
}

export default SagaSeñor;