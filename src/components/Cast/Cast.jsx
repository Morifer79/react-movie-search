import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchCast } from 'services/api';
import {
  ActorsImg,
  CastItem,
  CastList,
  CastWrapper,
  WikiLink,
} from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import { animateScroll } from 'react-scroll';
import default_person from '../../images/default_person.jpg';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const getCast = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const castInfo = await fetchSearchCast(movieId, {
          signal: abortController.signal,
        });
        setCast(castInfo);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCast(movieId);
    return () => {
      abortController.abort();
    };
  }, [movieId]);

  if (cast) {
    animateScroll.scrollMore(640);
  }

  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>There is no information yet.</p>}
      <CastWrapper>
        <CastList>
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <CastItem key={id}>
                <WikiLink
                  href={`https://ru.wikipedia.org/wiki/${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ActorsImg
                    src={
                      profile_path ? IMAGE_URL + profile_path : default_person
                    }
                    alt={name}
                    width={200}
                    height={300}
                  />
                  <p>
                    <b>Name: </b>
                    {name}
                  </p>
                  <p>
                    <b>Character: </b>
                    {character}
                  </p>
                </WikiLink>
              </CastItem>
            );
          })}
        </CastList>
      </CastWrapper>
    </>
  );
};

export default Cast;
