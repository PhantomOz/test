import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import QuizComponent from './components/quizComponent';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Result from './components/Result';

function App() {
  const [questions, setQuestions] = useState([])
  const {quiz} = useAppSelector(state => state.quiz) 
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Quiz: ", quiz)
  }, [])

  const next = () => {
    setCount(count + 1);
  }

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <header>
        <h1>Favour's Quizler</h1>
      </header>
      {quiz.length !== count?
      <QuizComponent question={quiz[count]} next={next}/> : <Result reset={reset}/>}
    </div>
  );
}

export default App;
