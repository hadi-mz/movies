import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ExploreMovies from "../pages/ExploreMovies";

export const routes = createBrowserRouter([
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/explore",
        element: <ExploreMovies />
    }
]
);

