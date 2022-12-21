import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastTitle, Box } from './styled';
import { getFilmCredits } from 'components/services/Api/getFilms';
import { CastItem } from 'components/CastItem/CastItem';

const Cast = () => {
    const { id } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        async function getCast(id) {
            try {
                const { data } = await getFilmCredits(id);
                setCasts(data.cast);
            } catch (error) {
                console.log(error);
            }
        }
        getCast(id);
    }, [id]);
    return (
        <Box>
            {!casts.length > 0 ? (
                <CastTitle>No casts</CastTitle>
            ) : (
                <CastList>
                    {casts.map(cast => (
                        <CastItem key={cast.cast_id} cast={cast} />
                    ))}
                </CastList>
            )}
        </Box>
    );
};

export default Cast;
