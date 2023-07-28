import { useState } from 'react';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { Form, Input, ButtonWrapper, SearchButton, CloseButton } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(query);
  };

  const handleInputChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleClearClick = () => {
    setQuery('');
    onSubmit('')
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search"
        value={query}
        onChange={evt=> handleInputChange(evt)}
      />
      <ButtonWrapper>
        <SearchButton type="submit">
          <SpriteIcon icon="search"/>
        </SearchButton>

        {query && (
          <CloseButton type="button" onClick={handleClearClick}>
            <SpriteIcon icon="cross"/>
          </CloseButton>
        )}
      </ButtonWrapper>
    </Form>
  );
};

export default SearchForm;