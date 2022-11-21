import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Topics from "../Topics/Topics";

const Home = () => {
  const quizzes = useLoaderData().data;
  return (
    <div>
      <Header />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {quizzes.map((quiz) => (
            <Topics key={quiz.id} quiz={quiz}></Topics>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
