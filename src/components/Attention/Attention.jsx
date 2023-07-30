import React from 'react';
import {
  ButtonWrapper,
  ContentWrapper,
  Message,
  Title,
} from './Attention.styled';
import AuthNavigation from 'components/Header/AuthNavigation';

const Attention = () => {
  return (
    <ContentWrapper>
      <Title>Attention</Title>
      <Message>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </Message>
      <ButtonWrapper>
        <AuthNavigation />
      </ButtonWrapper>
    </ContentWrapper>
  );
};

export default Attention;
