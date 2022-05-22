import React from "react"
import styles from "styled-components"



const SpaceDetail = ({selectedSpace, onGoBackClick}) => {

    const handleGoBack = () => {
        onGoBackClick()
    }

const Title =styles.h1`
  color:rgb(233, 228, 228);
  font-family: 'Poppins', sans-serif; 
  text-align: center;
`

    return(
        <>
            <button onClick={handleGoBack}> Go back </button>

            <Title>{selectedSpace.planet}</Title>
            <div className="details-container">
                <img id="planet-image" src={selectedSpace.image} alt="image of a planet"></img>
                <div id="description">{selectedSpace.description}</div>
            </div>
        </>
    )
}

export default SpaceDetail

