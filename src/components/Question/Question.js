import React from "react";

const Question = ({ query, total }) => {
  const { options, id, question, correctAnswer } = query;
  return (
    <div>
      <h3 className="text-2xl border p-4">Quiz: {question}</h3>
      <div className="flex justify-center">
        <div className="w-1/2">
          <div className="bg-slate-300 m-6 p-3 rounded-md cursor-pointer hover:bg-slate-200">
            {options[0]}
          </div>
          <div className="bg-slate-300 m-6 p-3 rounded-md cursor-pointer hover:bg-slate-200">
            {options[1]}
          </div>
          <div className="bg-slate-300 m-6 p-3 rounded-md cursor-pointer hover:bg-slate-200">
            {options[2]}
          </div>
          <div className="bg-slate-300 m-6 p-3 rounded-md cursor-pointer hover:bg-slate-200">
            {options[3]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
