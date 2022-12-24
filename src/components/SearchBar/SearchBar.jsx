import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getFindFilm } from "../services/Api/getFilms"
import PropTypes from 'prop-types';
import { Form, FormBtn, Input, } from "./styled";


const SearchBar = ({ setMovies }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(() => searchParams.get('query') ?? '');
    const {
        register,
        handleSubmit,
        reset,
    } = useForm({ defaultValues: { search: '' } });

    const onChange = ({ search }) => {
        setSearch(search);
    }

    const onSubmit = ({ search }) => {
        setSearch(search);
        setSearchParams({ query: search });
        reset();
    };

    useEffect(() => {
        if (!search) return;

        async function getFilmsByName(search) {
            try {
                const { data } = await getFindFilm(search);
                console.log(data.results);
                if (data.results.length === 0) {
                    alert(`Sorry, not movie ${search} in database...`);
                }
                setMovies(data.results);
            } catch (error) {
                console.log(error);
            }
        }
        getFilmsByName(search);
    }, [search, setMovies]);

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormBtn type="submit" />
                <Input
                    {...register('search', { required: 'This field is required' })}
                    value={search}
                    onChange={onChange}
                    name="search"
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search movie"
                />
            </Form>
        </>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};


export default SearchBar;