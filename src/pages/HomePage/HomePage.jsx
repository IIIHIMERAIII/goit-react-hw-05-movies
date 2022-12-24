import React from "react";
import { useState, useEffect } from "react";
import { getTrendFilms } from "components/services/Api/getFilms";
import { Main } from "./styled";
import { TrendFilms } from "components/TrendList/TrendList";

const HomePage = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        async function getData() {
            try {
                const { data } = await getTrendFilms();
                setFilms(data.results);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    return (
        <Main>
            {films.length > 0 && <TrendFilms movies={films} />}
        </Main>
    )
};

export default HomePage;