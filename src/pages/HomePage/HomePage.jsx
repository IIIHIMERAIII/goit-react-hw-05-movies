import React from "react";
import { useState, useEffect } from "react";
import { getTrendFilms } from "components/services/Api/getFilms";
import { TrendListItem } from "components/TrendList/TrendList";
import { TrendList, Main } from "./styled";

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
            <TrendList>
                {films.map(film => (
                    <TrendListItem
                        data={film}
                    />
                ))}
            </TrendList>
        </Main>
    )
};

export default HomePage;