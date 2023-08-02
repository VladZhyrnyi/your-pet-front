import { useEffect, useState } from 'react';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  Form,
  Input,
  ButtonWrapper,
  SearchButton,
  CloseButton,
} from './SearchForm.styled';
import { useLocation } from 'react-router-dom';

const SearchForm = ({ onSubmit, onClear }) => {
  const location = useLocation();

  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery('');
  }, [location]);

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(query.toLowerCase().trim());
  };

  const handleInputChange = evt => {
    setQuery(evt.target.value);
  };

  const handleClearClick = () => {
    setQuery('');

    onClear ? onClear() : onSubmit('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
      />
      <ButtonWrapper>
        <SearchButton type="submit">
          <SpriteIcon icon="search" />
        </SearchButton>

        {query && (
          <CloseButton type="button" onClick={handleClearClick}>
            <SpriteIcon icon="cross" />
          </CloseButton>
        )}
      </ButtonWrapper>
    </Form>
  );
};

export default SearchForm;
