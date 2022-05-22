import React from "react";
import SpaceItem from "./SpaceItem";


const SpaceList = ({space, onPlanetClick}) => {

    const spaceArray = space.map((space) => {
        return (
            <>
            <SpaceItem space={space} onPlanetClick={onPlanetClick}/>
            </>
        )
    })

    return (
        <>
            <div className="container">
                <div id="planets">
                    <ul>{spaceArray}</ul>
                </div>
            </div>
        </>
    )
}




export default SpaceList