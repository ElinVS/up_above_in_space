import React from "react"

const SpaceItem = ({space, onPlanetClick}) => {

    const handleClick = () => {
        onPlanetClick(space)
    }

    return (
        <>
            <li onClick={handleClick}>
                {space.planet}
                
            </li>
        </>
    )
}

export default SpaceItem