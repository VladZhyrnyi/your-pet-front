import React, { useState } from 'react';
import { NoticeList } from './NoticesCategoriesList.styled';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { Modal } from 'components/Modal';
import NoticeDetail from 'components/NoticeDatail/NoticeDetail';
import { notices } from '../NoticeCategoryItem/notices.js';

const NoticesCategoriesList = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [state, setState] = useState(notices);

  const showModal = () => setIsShowModal(true);
  const closeModal = () => setIsShowModal(false);
  return (
    <>
      <NoticeList>
        {state.map(el => {
          return (
            <NoticeCategoryItem key={el._id} el={el} showModal={showModal} />
          );
        })}
        {/* <NoticeCategoryItem showModal={showModal} /> */}
      </NoticeList>
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <NoticeDetail />
        </Modal>
      )}
    </>
  );
};

export default NoticesCategoriesList;
