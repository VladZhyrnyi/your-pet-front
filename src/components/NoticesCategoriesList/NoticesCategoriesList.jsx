import React, { useState } from 'react';
import { NoticeList } from './NoticesCategoriesList.styled';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import Modal from 'components/Modal';
import NoticeDetail from 'components/NoticeDatail/NoticeDetail';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/Content/selectors';

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
        {/* <NoticeCategoryItem showModal={showModal} /> */}
      </NoticeList>
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <NoticeDetail el={el} />
        </Modal>
      )}
    </>
  );
};

export default NoticesCategoriesList;
