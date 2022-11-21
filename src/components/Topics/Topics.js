import React from "react";
import { Link } from "react-router-dom";

const Topics = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-gray-200 rounded shadow-md">
      <img src={logo} className="w-full h-64" alt="" />
      <div className="p-5 border border-t-0">
        <p className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
          {name}
        </p>
        <p className="mb-2 text-gray-700">Total Quiz: {total}</p>
        <button className="bg-pink-500 px-4 py-3 rounded-md font-bold text-white">
          <Link to={`/quiz/${id}`}>Start Quiz</Link>
        </button>
      </div>
    </div>
  );
};

export default Topics;
