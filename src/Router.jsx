import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage"
import Characters from "./Pages/Characters";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Episodes from "./Pages/Episodes";
import Locations from "./Pages/Locations";
import FavoritesPage from "./Pages/FavoritesPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "Characters/",
                element: <Characters />,
            },
            {
                path: "about/",
                element: <About />
            },
            {
                path: "episodes/",
                element: <Episodes />
            },
            {
                path: "Locations/",
                element: <Locations />
            },
            {
                path: "Favorites/",
                element: <FavoritesPage />
            }
        ],
        errorElement: <NotFound />,
    },
]);

export default router;