import { useState } from 'react';
import { Main } from './styled';
import SearchBar from 'components/SearchBar/SearchBar';
import { TrendFilms } from 'components/TrendList/TrendList';

const Movie = () => {
    const [movies, setMovies] = useState(null);

    return (
        <>
            <Main>
                <SearchBar
                    setMovies={setMovies}
                />
                {movies && <TrendFilms movies={movies} />}
            </Main>
        </>
    )
};
export default Movie;
