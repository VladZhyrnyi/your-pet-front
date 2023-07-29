// import React, { useState } from 'react';
import {
  Button,
  ButtonWrapper,
  Form,
  IconCross,
  IconSearch,
  Input,
  InputWrapper,
} from './NoticesSearch.styled';
import { useSearchParams } from 'react-router-dom';

export const NoticesSearch = ({onSubmit}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit();
  };

    const clearSearchQuery = () => {
      setSearchParams(searchParams.delete('query'));
    };

  const handleChange = event => {
    if (event.target.value.trim().length === 0) {
      clearSearchQuery()
      return;
    }
    setSearchParams({ query: event.target.value.toLowerCase() });
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
            value={searchQuery ? searchQuery : ''}
          />
          <ButtonWrapper>
            <Button type="submit">
              <IconSearch />
            </Button>

            {searchQuery && (
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
