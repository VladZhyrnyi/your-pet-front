import React, { useState } from 'react';
import { Container } from './NoticesCategoriesList.styled';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { Modal } from 'components/Modal';
import NoticeDetail from 'components/NoticeDatail/NoticeDetail';

const NoticesCategoriesList = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };
  return (
    <>
      <Container>
        <NoticeCategoryItem showModal={showModal} />
        <NoticeCategoryItem showModal={showModal} />
        <NoticeCategoryItem showModal={showModal} />
        <NoticeCategoryItem showModal={showModal} />
        <NoticeCategoryItem showModal={showModal} />
      </Container>
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <NoticeDetail />
        </Modal>
      )}
    </>
  );
};

export default NoticesCategoriesList;
