import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchSearchDetail } from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import { BsCaretLeftFill } from 'react-icons/bs';
import default_image from '../../images/default_image.png';
import {
  Card,
  Hr,
  IconMasks,
  IconScroll,
  Info,
  InfoList,
  Item,
  PageWrapper,
  ReturnBtn,
  SubInfoLink,
  SubInfoList,
  SubInfoTitle,
  SubInfoWrapper,
  Thumb,
  Title,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    const abortController = new AbortController();
    const getDetail = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const detailsInfo = await fetchSearchDetail(movieId, {
          signal: abortController.signal,
        });
        setMovie(detailsInfo);
        setIsError(null);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getDetail();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
  const { title, release_date, overview, vote_average, poster_path } =
    movie || {};
  const imageSrc = poster_path ? IMAGE_URL + poster_path : default_image;
  const userScore = Math.round((Number(vote_average) * 100) / 10);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>{isError}</p>}
      <PageWrapper>
        {!isLoading && movie && (
          <>
            <ReturnBtn to={goBack.current}>
              <BsCaretLeftFill />
              Go Back
            </ReturnBtn>
            <Card>
              <Thumb>
                <img src={`${imageSrc}`} alt={title} />
              </Thumb>
              <Info>
                <Title>
                  {title} ({release_date.slice(0, 4)})
                </Title>
                <InfoList>
                  <Item>
                    <p>
                      User Score: <span>{userScore}%</span>
                    </p>
                  </Item>
                  <Item>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                  </Item>
                  <Item>
                    <h3>Genres</h3>
                    <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
                  </Item>
                </InfoList>
              </Info>
            </Card>
            <SubInfoWrapper>
              <SubInfoTitle> Additional information</SubInfoTitle>
              <SubInfoList>
                <SubInfoLink to="cast" state={{ ...location.state }}>
                  <IconMasks /> Cast
                </SubInfoLink>
                <SubInfoLink to="reviews" state={{ ...location.state }}>
                  <IconScroll /> Reviews
                </SubInfoLink>
              </SubInfoList>
            </SubInfoWrapper>
            <Hr />
          </>
        )}
        <Suspense>
          <Outlet />
        </Suspense>
      </PageWrapper>
    </>
  );
};

export default MovieDetails;
