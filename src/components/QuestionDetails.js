import React from "react"



const QuestionDetails = ({score, selectedQuestion, onAnswerClick1, onAnswerClick2, exitQuiz}) =>{

    const handleAnswerClick1 = () => {
        onAnswerClick1(selectedQuestion.options[0].isCorrect)
    }
    const handleAnswerClick2 = () => {
        onAnswerClick2(selectedQuestion.options[1].isCorrect)
    }

    const handleGoBack = () => {
        exitQuiz()
    }

        return (
            <>
            <button onClick={handleGoBack}> Go back </button>
            <h1>Score:{score}</h1>

            <h1>{selectedQuestion.question}</h1>
            
            <div className="answer-div">
            <li  onClick={handleAnswerClick1}>{selectedQuestion.options[0].answer}</li>
            <li onClick={handleAnswerClick2}>{selectedQuestion.options[1].answer}</li>
            
            </div>


            </>
        )

    }




export default QuestionDetails