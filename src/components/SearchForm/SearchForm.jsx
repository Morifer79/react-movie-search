import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import {
  IconSearch,
  SearchBtn,
  SearchFormInput,
  SearchBar,
} from './SearchForm.styled';

const SearchForm = ({ onQueryChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) return;
    onQueryChange(movieName);
  }, [movieName, onQueryChange]);

  const handleSubmit = (values, action) => {
    const query = values.query;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);

    action.resetForm();
  };

  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
      <SearchBar>
        <SearchFormInput
          type="text"
          name="query"
          autoFocus
          autoComplete="off"
        />
        <ErrorMessage name="name" component="div" />
        <SearchBtn type="submit">
          <IconSearch />
        </SearchBtn>
      </SearchBar>
    </Formik>
  );
};

export default SearchForm;
