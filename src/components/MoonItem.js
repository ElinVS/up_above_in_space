import React from "react"


const MoonItem= ({moon, onMoonClick}) => {

    const handleMoonClick = () => {
        onMoonClick(moon)
    }


    return (
        <>
            <h2 onClick={handleMoonClick}>{moon.title}</h2>
        </>
    )
}

export default MoonItem