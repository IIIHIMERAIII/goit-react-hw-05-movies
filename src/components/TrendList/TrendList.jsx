import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { TrendListItem } from "components/TrendListItem/TrendListItem";
import { ListItem, MovieList, IdLink } from "./styled";

export const TrendFilms = ({ movies }) => {
    const location = useLocation();
    return (
        <>
            {movies?.length > 0 && (
                <MovieList>
                    {movies.map(film => (
                        <ListItem key={film.id}>
                            <IdLink to={`/movie/${film.id}`} state={{ from: location }}>
                                <TrendListItem film={film} />
                            </IdLink>
                        </ListItem>
                    ))}
                </MovieList>
            )}
        </>
    );
};

TrendFilms.propTypes = {
    movies: PropTypes.array,
};
