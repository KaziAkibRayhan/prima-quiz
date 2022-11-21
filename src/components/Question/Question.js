import React from "react";
import { toast } from "react-toastify";

const Question = ({ query }) => {
  const { options, question, correctAnswer } = query;

  const handleCheckAnswer = (e) => {
    const answer = e.target.textContent;
    if (correctAnswer === answer) {
      toast.success("Correct Answer", { autoClose: 800 });
    } else {
      toast.warning("Answer is not Correct ! try again...", { autoClose: 800 });
    }
  };

  return (
    <div>
      <h3 className="text-2xl border p-4">Quiz: {question}</h3>
      <div className="flex justify-center">
        <div className="w-1/2">
          <div
            onClick={(e) => handleCheckAnswer(e)}
            className="bg-slate-300 m-6 p-3 rounded-md cursor-pointer hover:bg-slate-200"
          >
            {options[0]}
          </div>
          <div
            onClick={(e) => handleCheckAnswer(e)}
            className="bg-slate-300 m-6 p-3 rounded-md cursor-pointer hover:bg-slate-200"
          >
            {options[1]}
          </div>
          <div
            onClick={(e) => handleCheckAnswer(e)}
            className="bg-slate-300 m-6 p-3 rounded-md cursor-pointer hover:bg-slate-200"
          >
            {options[2]}
          </div>
          <div
            onClick={(e) => handleCheckAnswer(e)}
            className="bg-slate-300 m-6 p-3 rounded-md cursor-pointer hover:bg-slate-200"
          >
            {options[3]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
