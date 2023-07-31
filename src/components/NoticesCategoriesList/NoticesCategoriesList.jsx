import React, { useState } from 'react';
import { NoticeList } from './NoticesCategoriesList.styled';
import NoticeCategoryItem from 'components/NoticeCategoryItem';
import Modal from 'components/Modal';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/Content/selectors';
import NoticeDetail from 'components/NoticeDatail/NoticeDetail';

const NoticesCategoriesList = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [el, setEl] = useState(null);
  const { items } = useSelector(selectContacts);

  const showModal = el => {
    setEl(el);
    setIsShowModal(true);
  };
  const closeModal = () => setIsShowModal(false);

  return (
    <>
      <NoticeList>
        {items.map(el => {
          return (
            <NoticeCategoryItem key={el._id} el={el} showModal={showModal} />
          );
        })}
      </NoticeList>
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <NoticeDetail id={el._id} />
        </Modal>
      )}
    </>
  );
};

export default NoticesCategoriesList;
