import React, { useState } from "react"

import SpaceData from "../data/SpaceData"
import SpaceList from "../components/SpaceList"
import SpaceDetail from "../components/SpaceDetails"

import MoonData from "../data/MoonData"
import MoonList from "../components/MoonList"
import MoonDetails from "../components/MoonDetails"

import SpaceQuestions from "../data/SpaceQuestions"
import QuestionList from "../components/QuestionList"
import QuestionDetails from "../components/QuestionDetails"



const UniverseContainer = () => {

    const [austronauts,setAustronauts] = useState("")
    const [space, setSpace] = useState(SpaceData)
    const [selectedSpace, setSelectedSpace] = useState(null)
    const [moon, setMoon] = useState(MoonData)
    const [selectedMoon, setSelectedMoon] = useState(null)
    const [question, setQuestion] = useState(SpaceQuestions)
    const [nextQuestion,setNextQuestion] = useState(0)
    const [selectedQuestion,setSelectedQuestion]= useState(null)    
    const [score, setScore] = useState(0)
    

    const getAustronauts = function(){
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(austronauts => setAustronauts(austronauts))
    }

    const onPlanetClick = function(space) {
        setSelectedSpace(space)
    }

    const onGoBackClick = () => {
        setSelectedSpace(null)
    }

    const onMoonClick = function(moon){
        setSelectedMoon(moon)
    }
    const exitMoon = () => {
        setSelectedMoon(null)
    }

    const onAnswerClick1 = (isCorrect) => {
        if(isCorrect){
            setScore(score + 1)
        }
        setNextQuestion(nextQuestion +1)

    }

    const onAnswerClick2 = (isCorrect) => {
        if(isCorrect){
            setScore(score + 1)
        }
    }

    const onQuizClick = function(question){
        setSelectedQuestion(question)
    }

    const exitQuiz = () => {
        setSelectedQuestion(null)
    }


    let componentToShow

    if (selectedSpace) {
        componentToShow = <SpaceDetail selectedSpace={selectedSpace} setSelectedSpace={selectedSpace} onGoBackClick={onGoBackClick}/> 
    } else if (selectedMoon){
        componentToShow = <MoonDetails selectedMoon={selectedMoon} setSelectedMoon={selectedMoon} exitMoon={exitMoon}/>
    }else if (selectedQuestion) {
        componentToShow = <QuestionDetails selectedQuestion={selectedQuestion} setSelectedQuestion={selectedQuestion} score={score}  onAnswerClick1={onAnswerClick1} onAnswerClick2={onAnswerClick2} exitQuiz={exitQuiz} nextQuestion={nextQuestion}/>
    } else {
        componentToShow =  
        <>
        <SpaceList space={space} onPlanetClick={onPlanetClick}/>  
        <div className="people-in-space" onClick={getAustronauts}><h6>People currently in Space</h6><h1>{austronauts.number}</h1></div>
        <MoonList moon={moon} onMoonClick={onMoonClick}/>
        <QuestionList question={question} onQuizClick={onQuizClick}/>
        
        </>
    }

    
    return (
        <>
            <p>{componentToShow}</p>
            

        </>
    )
}


export default UniverseContainer

{/* <QuestionList score={score} question={question} onAnswerClick1={onAnswerClick1} onAnswerClick2={onAnswerClick2}/> */}




 {/* <SpaceList space={space} onPlanetClick={onPlanetClick}/>

       {selectedSpace ? <SpaceDetail selectedSpace={selectedSpace} setSelectedSpace={selectedSpace}/> : null} */}



