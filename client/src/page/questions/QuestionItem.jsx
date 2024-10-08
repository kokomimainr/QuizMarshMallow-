import React, { useState } from "react";
function QuestionItem({ question ,show, setShow, setPoints}) {
    const [input, setInput] = useState('');
    const [answer, setAnswer] = useState();

    const checkAnswer = (e) => {
        e.preventDefault();
        input.toLocaleLowerCase() === question.answer.toLocaleLowerCase() ? setAnswer(true) : setAnswer(false);
        input.toLocaleLowerCase() === question.answer.toLocaleLowerCase() ? setPoints((prev) => prev + 5) : setPoints((prev) => prev);
        setInput("")

    }
const showAnswer = () => {
    setShow(true)
} 

  return (
    <>
      <>{question && (<>        <img src={question.image} alt="картино4ка" />
        <h2>{question.question}</h2>
        <form onSubmit={(e) => checkAnswer(e)}>
          <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
          <button type="submit" onClick={showAnswer}>ответить</button>
        </form>
        </>)}
      </>
      {show && (answer ? (<h1>ХОРООООШ! + 5⭐</h1> ) : (<h1>Ну ты лашпедусярик 🙈 , правильный ответ : {question.answer}</h1>))}
    </>
  );
}

export default QuestionItem;
