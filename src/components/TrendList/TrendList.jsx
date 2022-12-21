import { contentURL } from "components/services/Api/getFilms";
import { ListItem, Poster, Title, IdLink } from "./styled";

export const TrendListItem = ({ data }) => {
    const { title, poster_path, id } = data;
    return (
        <>
            <ListItem key={id}>
                <IdLink to={`/movie/${id}`}>
                    <Poster src={contentURL + poster_path} alt={title} />
                    <Title>{title}</Title>
                </IdLink>
            </ListItem>
        </>
    )
};