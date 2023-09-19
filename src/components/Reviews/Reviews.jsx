import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchReviews } from 'services/api';
import { ReviewsWrapper, InfoBlock, InfoWrapper } from './Reviews.styled';
import {Loader} from 'components/Loader/Loader';
import { animateScroll } from 'react-scroll';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const abortCtrl = useRef();

  useEffect(() => {
    const getReviews = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }
      abortCtrl.current = new AbortController();
      try {
        setIsLoading(true);
        setIsError(null);
        const results = await fetchSearchReviews(
          movieId,
          abortCtrl.current.signal
        );
        setReviews(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setIsError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
  if (reviews) {
    animateScroll.scrollMore(400);
  }
  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>Not Found</p>}
      {!isLoading && reviews.length > 0 && (
        <ReviewsWrapper>
          <InfoWrapper>
            {reviews.map(({ id, author, content }) => (
              <InfoBlock key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </InfoBlock>
            ))}
          </InfoWrapper>
        </ReviewsWrapper>
      )}
      {!isLoading && reviews.length === 0 && (
        <div>Sorry, there are no reviews for this movie yet.</div>
      )}
      ;
    </>
  );
};

export default Reviews;
