import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchReviews } from 'services/api';
import { ReviewsWrapper, InfoBlock, InfoWrapper } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';
import { animateScroll } from 'react-scroll';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const getReviews = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const reviewInfo = await fetchSearchReviews(movieId, {
          signal: abortController.signal,
        });
        setReviews(reviewInfo);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews(movieId);

    return () => {
      abortController.abort();
    };
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
        <div>We dont have ani reviews for this movie.</div>
      )}
    </>
  );
};

export default Reviews;
