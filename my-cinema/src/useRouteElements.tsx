import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import path from "./constants/path";
const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: path.movieDetail,
            element: (
                <MainLayout>
                    <MovieDetail />
                </MainLayout>
            ),
        },
    ]);

    return routes;
};

export default AppRoutes;
