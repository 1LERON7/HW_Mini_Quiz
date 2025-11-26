import { useState } from "react";
import './style.css';

function Quiz({question, count}) {
    let i = 0;
    
return (
    <div>
        <h3>{question.question}</h3>
        
        {question.answers.map((a) => (
            <button key={i + 1} onClick={() => count(a === question.correct)}>{a}</button>
        ))}
    </div>
);
}

export default Quiz;
