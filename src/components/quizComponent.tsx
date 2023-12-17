import React, {useState} from 'react'
import { Quiz, incrementScore } from '../features/quiz/quizSlice';
import { useAppDispatch } from '../app/hooks';

function QuizComponent({question, next}: {question: Quiz, next: () => void}) {
    const dispatch = useAppDispatch()

    function checkAnswer(option: string) {
        console.log("Answer checked")
        if(option === question.answer) {
            dispatch(incrementScore());
        }
        next();

    }
  return (
    <div className='quiz'>
        <p className="quiz_question">
            {question.question}
        </p>
        <div className="quiz_options">
            {question.options?.map((option) => (<button onClick={() => checkAnswer(option)} key={option}>{option}</button>))}
        </div>
    </div>
  )
}

export default QuizComponent;