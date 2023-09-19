import {useState, useEffect, useRef} from 'react';
import {Loader} from 'components/Loader/Loader';
import {fetchSearchMovie} from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';

//import { useSearchParam, useLocation } from 'react-router-dom';
//import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';


const Movies = () => {
	//const location = useLocation();
	const [movies, setMovies] = useState([]);
	const [query, setQuery] = useState('');
  //const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(null);
	const abortCtrl = useRef();

  //const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }

    const getMovie = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();
      try {
        setIsLoading(true);
        setIsError(null);

        const movies = await fetchSearchMovie(query, abortCtrl.current.signal);
        setMovies(movies);
        setIsError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setIsError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [query]);
	
	const onQueryChange = searchQuery => {
    if (searchQuery === query) {
      return;
    }
    setQuery(searchQuery);
    setIsError(null);
  };

  return (
    <>
      <SearchForm onQueryChange={onQueryChange} />
      {isLoading && <Loader />}
      {isError && <p>{isError}</p>}
      {!isLoading && movies.length > 0 && <MoviesList movieItems={movies} />}
    </>
  );
};

export default Movies;
