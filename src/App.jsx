// Adasa Assignment
// Main App Router
// Created by Abdullah Fathi

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import LayOut from "./pages/LayOut.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import NotFound from "./pages/NotFound.jsx";

import postsData from "./data/posts.json";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: <Home data={postsData} />,
        },
        {
          path: "home",
          element: <Home data={postsData} />,
        },
        {
          path: "blog",
          element: <Blog data={postsData} />,
        },
        {
          path: "blog/:slug",
          element: <BlogPost data={postsData} />,
        },
        {
          path: "about",
          element: <About data={postsData} />,
        },
        {
          path: "privacy",
          element: <Privacy />,
        },
        {
          path: "terms",
          element: <Terms />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
