import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "components/SearchBar/SearchBar";
import { TrendListItem } from "components/TrendList/TrendList";
import { getFindFilm } from "components/services/Api/getFilms";
import { TrendList } from "./styled";
import { Main } from "./styled";

export const MoviesPage = () => {
    const [films, setFilms] = useState([]);
    const [searchParams] = useSearchParams();

    const keyWord = searchParams.get('query') ?? '';
    useEffect(() => {
        if (!keyWord) return;
        async function getFilms(searchQ) {
            try {
                const { data } = await getFindFilm(searchQ);

                setFilms(data.results);
            } catch (error) {
                console.log(error);
            }

        }
        getFilms(keyWord);

    }, [keyWord]);

    return (
        <>
            <Main>
                <SearchBar
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