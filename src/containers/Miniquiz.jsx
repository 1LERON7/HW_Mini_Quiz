import { useState } from "react";
import './style.css';
import Quiz from "./Quiz";

function Miniquiz() {

const question = [
  {
    id: 1,
    question: "Яка мова виконується в браузері?",
    answers: ["Python", "JavaScript", "PHP"],
    correct: "JavaScript",
  },
  {
    id: 2,
    question: "Який тег використовується для заголовка?",
    answers: ["<span>", "<h1>", "<ul>"],
    correct: "<h1>",
  },
  {
    id: 3,
    question: "Що таке React?",
    answers: ["Мова програмування", "Фреймворк", "Бібліотека"],
    correct: "Бібліотека",
  },
];
    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useState(question);
    const [count, setCount] = useState(1);

    const NextIndex = () => {
        setIndex(index + 1);
        console.log(index);
        
    }

    const CoreCount = (correct) => {
        if(correct) {
            setCount(count + 1)
            console.log(count);
            NextIndex();
        }
        

        NextIndex();
    }
    
return (
    <div className="container">
        {index < questions.length ? (<Quiz question={questions[index]} count={CoreCount}/>)
        : (
            <h2>Core: {count}</h2>
            
        )}
    </div>
);
}

export default Miniquiz;
