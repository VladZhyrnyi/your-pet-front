import React from 'react';
import { Container } from './NoticesCategoriesList.styled';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';

const NoticesCategoriesList = () => {
  return (
    <Container>
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
    </Container>
  );
};

export default NoticesCategoriesList;
