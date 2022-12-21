import { ReviewsItem } from '../ReviewsItem/RewiewsItem';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from '../services/Api/getFilms';
import { ListReviews, TitleReviews } from './styled';

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function getReviews(id) {
            try {
                const { data } = await getFilmReviews(id);
                setReviews(data.results);
            } catch (error) {
                console.log(error);
            }
        }
        getReviews(id);
    }, [id]);

    return (
        <>
            {!reviews.length > 0 ? (
                <TitleReviews>No reviews</TitleReviews>
            ) : (
                <ListReviews>
                    <TitleReviews>Users reviews</TitleReviews>
                    {reviews.map(review => (
                        <ReviewsItem key={review.id} review={review} />
                    ))}
                </ListReviews>
            )}
        </>
    );
};

export default Reviews;