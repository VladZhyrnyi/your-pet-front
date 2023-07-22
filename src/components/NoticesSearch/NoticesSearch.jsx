import React, { useState } from 'react';
import {
  Button,
  ButtonWrapper,
  Form,
  Input,
  InputWrapper,
  SvgClean,
  SvgSubmit,
} from './NoticesSearch.styled';
import svg from '../../images/symbol-defs.svg';

export const NoticesSearch = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim().length === 0) return;

    setInputValue('');

    return console.log('Submit');
  };

  const handleChange = event => {
    console.log(event.target.value.toLowerCase());
    setInputValue(event.target.value.toLowerCase());
  };

  const handleClean = () => {
    setInputValue('');
  };

  const isSearchText = inputValue.length;
  console.log(isSearchText);

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
              <SvgSubmit>
                <use href={`${svg}#icon-search`}></use>
              </SvgSubmit>
            </Button>

            {inputValue.length > 0 && (
              <Button type="button" onClick={handleClean}>
                {/* <svg width="24" height="24" fill="red">
                  <use href={`${svg}#icon-cross-small`}></use>
                </svg> */}
                <SvgClean>
                <use href={`${svg}#icon-cross-small`}></use>
              </SvgClean>
              </Button>
            )}
          </ButtonWrapper>
        </InputWrapper>
      </Form>
    </>
  );
};

export default NoticesSearch;
