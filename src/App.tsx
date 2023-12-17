import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import QuizComponent from './components/quizComponent';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from './app/hooks';

function App() {
  const [questions, setQuestions] = useState([])
  const dispatch = useAppDispatch();
  const {quiz} = useAppSelector(state => state.quiz) 
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Quiz: ", quiz)
  }, [])
  return (
    <div>
      <header>
        <h1>Favour's Quizler</h1>
      </header>
      <QuizComponent question={quiz[count]} />
    </div>
  );
}

export default App;
