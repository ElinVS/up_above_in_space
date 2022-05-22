import React from "react"


const QuestionItem = ({question, onQuizClick}) => {

    const handleQuizClick = () => {
        onQuizClick(question)
    }

    return (
        <>
        <p onClick={handleQuizClick}>{question.title}</p>
        </>
    )
}





export default QuestionItem