import { useSearchParams } from 'react-router-dom';
import {
  IconSearch,
  SearchBar,
  SearchFormInput,
  SearchBtn,
} from './SearchForm.styled';

const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value.trim();
    if (!query) {
      setSearchParams({});
    }
    setSearchParams({ query: query });
  };

  return (
    <SearchBar onSubmit={handleSubmit}>
      <SearchFormInput type="text" name="query" autoFocus autoComplete="off" />
      <SearchBtn type="submit">
        <IconSearch />
      </SearchBtn>
    </SearchBar>
  );
};

export default SearchForm;
