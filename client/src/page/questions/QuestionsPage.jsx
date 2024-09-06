import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../services/axiosinstance";
import { useNavigate, useParams } from "react-router";
import QuestionItem from "./QuestionItem";
function QuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const { themeId } = useParams();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  //   let question = questions[count];

  const getQuestions = async () => {
    try {
      const response = await axiosRequest.get(`/themes/${themeId}`);
      if (response.status === 200) {
        setQuestions(response.data.questions);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);
  // console.log(questions[count], count);
  const onHandleNext = () => {
            setShow(false);
    count === questions.length - 1
      ? navigate("/themes")
      : setCount((prev) => prev + 1);
  };
  return (
    <>
      {questions && <QuestionItem question={questions[count]} show={show} setShow={setShow}/>}
      <button onClick={onHandleNext}>
        {count === questions.length - 1
          ? "Вернуться к темам"
          : "Следующий вопрос"}
      </button>
      {/* <button onClick={setCount((prev) =>  {prev + 1})} >далее</button> */}
    </>
  );
}

export default QuestionsPage;
