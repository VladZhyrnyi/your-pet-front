import React, { useState } from 'react';
import {
  Button,
  ButtonWrapper,
  Form,
  Input,
  InputWrapper,
  Title,
} from './NoticesSearch.styled';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
// import svg from '../../images/symbol-defs.svg';

export const NoticesSearch = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim().length === 0) return;

    setInputValue('');

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
      <Title>Find your favorite pet</Title>
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
              <SpriteIcon icon="search" color="#54adff" fill></SpriteIcon>
            </Button>

            {inputValue.length > 0 && (
              <Button type="button" onClick={handleClean}>
                <SpriteIcon icon="cross" color="#ffc107" ></SpriteIcon>
              </Button>
            )}
          </ButtonWrapper>
        </InputWrapper>
      </Form>
    </>
  );
};

export default NoticesSearch;
