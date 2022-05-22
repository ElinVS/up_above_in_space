import React from "react"
import QuestionItem from "./QuestionItem"


const QuestionList = ({question, onQuizClick}) => {

    const questionArray = question.map((question) =>{
        return <QuestionItem question={question} onQuizClick={onQuizClick}/>
    })

    return (
        <>

            <div className="container">
                <div id="quiz">
                    <ul>{questionArray}</ul>
                </div>
            </div>


         
        </>
    )

}




export default QuestionList


{/* <QuestionDetails question={question} score={score} onAnswerClick1={onAnswerClick1} onAnswerClick2={onAnswerClick2}/> */}