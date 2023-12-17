import React, {useState} from 'react'
import { Quiz } from '../features/quiz/quizSlice';

function QuizComponent({question}: {question: Quiz}) {

    const [answer, setAnswer] = useState('');


    function checkAnswer() {
        console.log("Answer checked")
    }
  return (
    <div className='quiz'>
        <p className="quiz_question">
            {question.question}
        </p>
        <div className="quiz_options">
            {question.options?.map((option) => (<button onClick={checkAnswer} key={option}>{option}</button>))}
        </div>
    </div>
  )
}

export default QuizComponent;