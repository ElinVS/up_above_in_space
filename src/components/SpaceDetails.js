import React from "react"


const SpaceDetail = ({selectedSpace, onGoBackClick}) => {

    const handleGoBack = () => {
        onGoBackClick()
    }

    return(
        <>
            <button onClick={handleGoBack}> Go back </button>

            <h1>{selectedSpace.planet}</h1>
            <div className="details-container">
                <img id="planet-image" src={selectedSpace.image} alt="image of a planet"></img>
                <div id="description">{selectedSpace.description}</div>
            </div>
        </>
    )
}

export default SpaceDetail

