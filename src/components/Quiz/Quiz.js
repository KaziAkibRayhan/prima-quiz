import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const quizzes = useLoaderData().data;
  const { name, questions, total } = quizzes;

  return (
    <div>
      <h2 className="text-3xl mt-4 p-2">Quiz Of: {name}</h2>
      <div>
        {questions.map((query, idx) => (
          <Question key={idx} query={query} total={total}></Question>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
