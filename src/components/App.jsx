
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header"

const LazyHomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LazyMoviesPage = lazy(() => import("../pages/MoviePage/MoviesPage"));
const LazyMovieInfoPage = lazy(() => import("../pages/MovieInfoPage/MovieInfoPage"));
const LazyCast = lazy(() => import("./Cast/Cast"));
const LazyReviews = lazy(() => import("../components/Reviews/Reviews"));

export const App = () => {
    return (
        <>
            <Header />
            <Suspense>
                <Routes>
                    <Route index element={<LazyHomePage />} />
                    <Route path="/movies" element={<LazyMoviesPage />} />
                    <Route path="/movie/:id" element={<LazyMovieInfoPage />}>
                        <Route path="cast" element={<LazyCast />} />
                        <Route path="reviews" element={<LazyReviews />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};
