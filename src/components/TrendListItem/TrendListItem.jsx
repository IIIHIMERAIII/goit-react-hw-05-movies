import PropTypes from 'prop-types';
import { contentURL } from 'components/services/Api/getFilms';
import { Poster, Title } from './styled';

export const TrendListItem = ({ film }) => {
    const { title, poster_path } = film;
    return (
        <>
            <Poster
                src={
                    poster_path
                        ? contentURL + poster_path
                        : 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg'
                }
                alt={title}
            />
            <Title>{title}</Title>
        </>
    );
};

TrendListItem.propTypes = {
    film: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
    }),
}.isRequired;