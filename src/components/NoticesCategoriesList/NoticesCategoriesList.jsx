import React, { useEffect, useState } from 'react';
import {
  LoaderWrapper,
  NoResults,
  NoticeList,
  Span,
} from './NoticesCategoriesList.styled';
import NoticeCategoryItem from 'components/NoticeCategoryItem';
import Modal from 'components/Modal';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/Content/selectors';
import NoticeDetail from 'components/NoticeDatail/NoticeDetail';
import Loader from 'components/Loader/Loader';
import { selectUser } from 'redux/Auth/selectors';
import { noticesFilter } from 'utils/noticesFilter';
import { useSearchParams } from 'react-router-dom';

const NoticesCategoriesList = ({ categoryName }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [el, setEl] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get('query');
  console.log(searchText);

  const [collection, setCollection] = useState([]);

  const { items, isLoading } = useSelector(selectContacts);
  const { favorite } = useSelector(selectUser);

  useEffect(() => {
    if (categoryName === 'favorite') {
      setCollection(noticesFilter(items, favorite));
      return;
    }
    setCollection(items);
  }, [categoryName, favorite, items]);

  const showModal = el => {
    setEl(el);
    setIsShowModal(true);
  };
  const closeModal = () => setIsShowModal(false);

  return (
    <>
      {collection.length === 0 && !isLoading && (
        <>
          <NoResults>
            By search request "<Span>{searchText}</Span>" nothing found.
          </NoResults>
        </>
      )}

      {!isLoading && collection.length > 0 && (
        <NoticeList>
          {collection.map(el => {
            return (
              <NoticeCategoryItem key={el._id} el={el} showModal={showModal} />
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
