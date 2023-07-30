import { useState } from 'react';

import {
  Button,
  ButtonWrapper,
  Form,
  IconCross,
  IconSearch,
  Input,
  InputWrapper,
} from './NoticesSearch.styled';

export const NoticesSearch = ({ onSubmit, onClear }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(value);
  };

  const clearSearchQuery = () => {
    setValue('');
    onClear();
  };

  const handleChange = event => {
    if (event.target.value.trim().length === 0) {
      clearSearchQuery();
      return;
    }

    setValue(event.target.value.trim());
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            name="inputValue"
            onChange={handleChange}
            type="text"
            placeholder="Search"
            value={value}
          />
          <ButtonWrapper>
            <Button type="submit">
              <IconSearch />
            </Button>
            {value.length !== 0 && (
              <Button type="button" onClick={clearSearchQuery}>
                <IconCross />
              </Button>
            )}
          </ButtonWrapper>
        </InputWrapper>
      </Form>
    </>
  );
};

export default NoticesSearch;
