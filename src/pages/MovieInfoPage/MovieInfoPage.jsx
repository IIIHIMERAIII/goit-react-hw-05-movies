
import React from "react";
import { useState, useEffect, Suspense } from "react";
import { getFilmInfo, contentURL } from "components/services/Api/getFilms";
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import {
    Wrapper,
    Image,
    Desc,
    TextWrap,
    Title,
    BackBtn,
    Container,
    WrapperBtn,
    WrapperOutlet,
    Linked,
    Btn,
    IconBack,
} from "./styled";

const MovieInfoPage = () => {
    const [film, setFilm] = useState("");
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        async function getFilm(id) {
            try {
                const { data } = await getFilmInfo(id)
                setFilm(data);
            } catch (error) {
                console.log(error);
            }
        };
        getFilm(id);
    }, [id]);

    const { title, overview, genres, release_date, vote_average, poster_path } =
        film;

    return (
        <Container>
            <BackBtn onClick={() => navigate(-1)}>
                <IconBack />
            </BackBtn>
            {film && (
                <section>
                    <Wrapper>
                        <Image
                            src={
                                poster_path
                                    ? contentURL + poster_path
                                    : 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg'
                            }
                            alt={title}
                        />
                        <Desc>
                            <Title>{title}</Title>
                            <p>{overview}</p>

                            <p>
                                <TextWrap>Genres: </TextWrap>
                                {genres.map(gen => gen.name).join(', ')}
                            </p>
                            <p>
                                <TextWrap>Release Date:</TextWrap> {release_date}
                            </p>
                            <p>
                                <TextWrap>Rating:</TextWrap> {vote_average.toFixed(1)}
                            </p>
                        </Desc>
                    </Wrapper>
                    <WrapperBtn>
                        <Linked to="cast" >
                            <Btn>Cast</Btn>
                        </Linked>
                        <Linked to="reviews" >
                            <Btn>Reviews</Btn>
                        </Linked>
                    </WrapperBtn>
                    <WrapperOutlet>
                        <Suspense fallback={null}>
                            <Outlet />
                        </Suspense>
                    </WrapperOutlet>
                </section>
            )}
        </Container>
    );
};

export default MovieInfoPage;