import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { resetScore } from '../features/quiz/quizSlice';


function Result({reset}: {reset: () => void}) {
  const {score, quiz} = useAppSelector(state => state.quiz);
  const dispatch = useAppDispatch();

  return (
    <div className='result'>
        <h3>You Answered {score}/{quiz.length}  </h3>
        <button className='resetbtn' onClick={() => {dispatch(resetScore()); reset();}}>Reset</button>
    </div>
  )
}

export default Result;