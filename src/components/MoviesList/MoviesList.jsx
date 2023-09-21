import { useLocation } from 'react-router-dom';
import { MovieList, MovieItem, MovieLink } from './MoviesList.styled';
import { CameraReels } from 'pages/MovieDetails/MovieDetails.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {movies.map(({ id, title, name }) => {
        return (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <CameraReels />
              {title || name}
            </MovieLink>
          </MovieItem>
        );
      })}
    </MovieList>
  );
};

export default MoviesList;
