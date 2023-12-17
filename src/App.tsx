import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import QuizComponent from './components/quizComponent';
import { useDispatch } from 'react-redux';

function App() {
  const [questions, setQuestions] = useState([])
  const dispatch = useDispatch();
  
  useEffect(() => {
    
  },[])
  return (
    <div>
      <header>
        <h1>Favour's Quizler</h1>
      </header>
      <QuizComponent question='' />
    </div>
  );
}

export default App;
