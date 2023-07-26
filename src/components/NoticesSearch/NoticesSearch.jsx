import React, { useState } from 'react';
import {
  Button,
  ButtonWrapper,
  Form,
  IconCross,
  IconSearch,
  Input,
  InputWrapper,
} from './NoticesSearch.styled';

export const NoticesSearch = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim().length === 0) return;

    setInputValue('');
    // Согласовать с Викой.
    return console.log('Submit');
  };

  const handleChange = event => {
    setInputValue(event.target.value.toLowerCase());
  };

  const handleClean = () => {
    setInputValue('');
  };

  //   const isSearchText = inputValue.length;

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            name="inputValue"
            onChange={handleChange}
            type="text"
            placeholder="Search"
            value={inputValue}
          />
          <ButtonWrapper>
            <Button type="submit">
              <IconSearch />
            </Button>

            {inputValue.length > 0 && (
              <Button type="button" onClick={handleClean}>
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
