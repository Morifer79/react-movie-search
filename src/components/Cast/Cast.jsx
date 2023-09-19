import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchCast } from 'services/api';
import { CastItem, CastList, CastWrapper } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import { animateScroll } from 'react-scroll';
//import { toast } from 'react-toastify';
import person from '../../images/person.jpg';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const abortCtrl = useRef();

  useEffect(() => {
    const getCast = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }
      abortCtrl.current = new AbortController();
      try {
        setIsLoading(true);
        setIsError(null);
        const castInfo = await fetchSearchCast(
          movieId,
          abortCtrl.current.signal
        );
        setCast(castInfo);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setIsError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  if (cast) {
    animateScroll.scrollMore(620);
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
                <img
                  src={profile_path ? IMAGE_URL + profile_path : person}
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
              </CastItem>
            );
          })}
        </CastList>
      </CastWrapper>
    </>
  );
};

export default Cast;
