import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "./Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/topics", element: <Topics /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);
