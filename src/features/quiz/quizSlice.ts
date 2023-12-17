import { createSlice } from "@reduxjs/toolkit";

export interface Quiz {
  question: string;
  options: string[];
  answer: string;
}
export interface QuizState {
  quiz: Quiz[];
  score: number;
}

const initialState: QuizState = {
  quiz: [
    {
      question: "What is the capital of Nigeria?",
      options: ["Abuja", "Lagos", "Kano", "Benin City"],
      answer: "Abuja",
    },
    {
      question: "What is the largest continent by area?",
      options: ["Africa", "Asia", "Europe", "Australia"],
      answer: "Asia",
    },
    {
      question: "Who wrote the novel Frankenstein?",
      options: [
        "Mary Shelley",
        "Bram Stoker",
        "Edgar Allan Poe",
        "H. G. Wells",
      ],
      answer: "Mary Shelley",
    },
  ],
  score: 0,
};

export const getScore = (state: QuizState) => state.score;
export const getQuiz = (state: QuizState) => state.quiz;

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.score += 1;
    },
    resetScore: (state) => {
      state.score -= 1;
    },
  },
});

export const { incrementScore, resetScore } = quizSlice.actions;

export default quizSlice.reducer;
