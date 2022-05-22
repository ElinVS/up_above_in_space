import React from "react"


const MoonDetails = ({selectedMoon, exitMoon}) => {

    const handleGoBack = ()=> {
        exitMoon()
    }

    return(
        <>
        <button onClick={handleGoBack}> Go back </button>

        <div className="details-container">
            <h3>{selectedMoon.fact} -</h3>
            <img id="moon-image" src={selectedMoon.image} alt="image of the moon"></img>
        </div>
        <div className="details-container">
            <img id="moon-image" src={selectedMoon.image2} alt="image of a austronaut"></img>
            <h3>- {selectedMoon.fact2}</h3>
        </div>
        <div className="details-container">
            <h3>{selectedMoon.fact3} -</h3>
            <img id="moon-image" src={selectedMoon.image3} alt="image of the moon"></img>
        </div>
        <div className="details-container">
            <img id="moon-image" src={selectedMoon.image4} alt="image of a austronaut"></img>
            <h3>- {selectedMoon.fact4}</h3>
        </div>
        <div className="details-container">
            <h3>{selectedMoon.fact5} -</h3>
            <img id="moon-image" src={selectedMoon.image5} alt="image of the moon"></img>
        </div>

        </>
    )
}



export default MoonDetails