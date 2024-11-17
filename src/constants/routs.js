import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ExploreMovies from "../pages/ExploreMovies";
import DetailMovie from "../pages/DetailMovie";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/explore",
        element: <ExploreMovies />
    },
    {
        path:"/detailMovie/:title",
        element: <DetailMovie />
    }
]
);

