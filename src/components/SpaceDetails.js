import React from "react"


const SpaceDetail = ({selectedSpace, onGoBackClick}) => {

    const handleGoBack = () => {
        onGoBackClick()
    }

    return(
        <>
            <button onClick={handleGoBack}> Go back </button>

            <div className="details-container">
            <img id="planet-image" src={selectedSpace.image}></img>
            <h1>{selectedSpace.planet}</h1>
            <li>{selectedSpace.description}</li>
            <li>{selectedSpace.austronaut}</li>
            </div>
        </>
    )
}




export default SpaceDetail

