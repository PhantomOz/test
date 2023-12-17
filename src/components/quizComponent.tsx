import React, {useState} from 'react'

function QuizComponent({question}: {question: string}) {

    const [answer, setAnswer] = useState('');


    function checkAnswer() {
        console.log("Answer checked")
    }
  return (
    <div className='quiz'>
        <p className="quiz_question">
            What is the capital of France?
        </p>
        <div className="quiz_options">
            <button onClick={checkAnswer}>Paris</button>
            <button onClick={checkAnswer}>Lyon</button>
            <button onClick={checkAnswer}>Marseille</button>
            <button onClick={checkAnswer}>Toulouse</button>
        </div>
    </div>
  )
}

export default QuizComponent;