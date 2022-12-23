import { useState } from "react";
import PropTypes from 'prop-types';
import { Form, FormBtn, Input } from "./styled";
import { useSearchParams } from "react-router-dom";


export const SearchBar = ({ onSubmit = () => { } }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState(() => searchParams.get('query') ?? '');


    const onChange = e => setSearch(e.currentTarget.value);

    const handlerSubmit = e => {
        e.preventDefault();
        onSubmit(search);
        setSearch('');
        setSearchParams({ query: search });
    };

    return (
        <>
            <Form onSubmit={handlerSubmit}>
                <FormBtn type="submit" />
                <Input
                    value={search}
                    name="search"
                    onChange={onChange}
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </Form>
        </>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};