import React, { useState } from "react";
import { useEffect } from "react";
import { SearchBar } from "components/SearchBar/SearchBar";
import { TrendListItem } from "components/TrendList/TrendList";
import { getFindFilm } from "components/services/Api/getFilms";
import { TrendList } from "./styled";
import { Main } from "./styled";

export const MoviesPage = () => {
    const [films, setFilms] = useState([]);
    const [searchQ, setSearchQ] = useState("");

    useEffect(() => {
        if (searchQ) {
            getSearchingMovie();
        }

        async function getSearchingMovie() {
            try {
                const { data } = await getFindFilm(searchQ);
                if (!data.results.length) {
                    return alert("No any film by this tag");
                }
                setFilms(data.results);
            } catch (error) {
                console.log(error);
            }
        }
    }, [searchQ]);

    const searchFilm = searchQuerry => {
        if (!searchQuerry || searchQuerry === searchQ) return;
        setSearchQ(searchQuerry);
    }
    return (
        <>
            <Main>
                <SearchBar
                    onSubmit={searchFilm}
                />
                <TrendList>
                    {films.map(film => (
                        <TrendListItem
                            data={film}
                        />
                    ))}
                </TrendList>
            </Main>
        </>
    )
};


export default MoviesPage;