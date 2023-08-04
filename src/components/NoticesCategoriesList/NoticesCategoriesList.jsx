import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  LoaderWrapper,
  NoResults,
  NoticeList,
} from './NoticesCategoriesList.styled';
import NoticeCategoryItem from 'components/NoticeCategoryItem';
import Modal from 'components/Modal';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/Content/selectors';
import NoticeDetail from 'components/NoticeDatail/NoticeDetail';
import Loader from 'components/Loader/Loader';

const NOT_FOUND_MESSAGES = {
  favorite: "You haven't favorite notices yet.",
  'for-free': 'No notices in this category.',
  own: 'No notices in this category.',
  sell: 'All pets are sold',
  'lost-found': 'Yoohoo ;) All pets in good hands!',
};

const NoticesCategoriesList = () => {
  const { categoryName } = useParams();
  const [isShowModal, setIsShowModal] = useState(false);
  const [el, setEl] = useState(null);

  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('query');

  const { items, isLoading } = useSelector(selectContacts);

  const showModal = el => {
    setEl(el);
    setIsShowModal(true);
  };
  const closeModal = () => setIsShowModal(false);

  return (
    <>
      {items.length === 0 && !isLoading && (
        <>
          <NoResults>
            {searchText
              ? `Nothing found by query: "${searchText}"`
              : NOT_FOUND_MESSAGES[categoryName]}
          </NoResults>
        </>
      )}

      {!isLoading && items.length > 0 && (
        <NoticeList>
          {items.map(item => {
            return (
              <NoticeCategoryItem
                key={item._id}
                el={item}
                showModal={showModal}
              />
            );
          })}
        </NoticeList>
      )}

      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}

      {isShowModal && (
        <Modal closeModal={closeModal}>
          <NoticeDetail id={el._id} />
        </Modal>
      )}
    </>
  );
};

export default NoticesCategoriesList;
