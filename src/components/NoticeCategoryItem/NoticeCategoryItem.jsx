import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/Auth/selectors';

import { addFavorite, removeFavorite } from 'redux/Auth/operations';
import { calcAge } from 'utils/calcAge';

import Modal from 'components/Modal/Modal';
import DelMessage from 'components/DelMessage';

import {
  BtnLearnMore,
  ButtonCardWrapper,
  ButtonFavorite,
  ButtonTrash,
  Card,
  Div,
  IconClock,
  IconFavorite,
  IconFemale,
  IconLocation,
  IconMale,
  IconNotFavorite,
  IconTrash,
  Img,
  Info,
  NameCategory,
  ThumbImg,
  Title,
  WrapperContent,
  WrapperInfo,
} from './NoticeCategoryItem.styled';
import Attention from 'components/Attention';

import defaultPhoto from '../../images/defaultPhoto.png';
import { getNotices } from 'redux/Content/operations';

const CATEGORY_NAMES = {
  sell: 'sell',
  'lost-found': 'lost/found',
  'for-free': 'in good hands',
};

const NoticeCategoryItem = ({ showModal, el }) => {
  const { date, file, type, category, location, sex, title, _id, owner } = el;

  const [isShowModal, setIsShowModal] = useState(false);
  const [isAttention, setIsAttention] = useState(false);

  const { favorite, _id: id } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const isMyAds = owner === id;
  const agePet = calcAge(date);
  const isFavorite = favorite.includes(_id);

  const handleFavorite = async id => {
    if (isLoggedIn) {
      setIsAttention(false);
      if (isFavorite) {
        await dispatch(removeFavorite(id));
        dispatch(getNotices({ params: { category: 'favorite' } }));
      } else {
        dispatch(addFavorite(id));
      }

      return;
    }
    setIsAttention(true);
  };

  const showMessage = () => setIsShowModal(true);

  const closeModal = () => {
    setIsAttention(false);
    setIsShowModal(false);
  };

  return (
    <>
      <Card>
        <Div>
          <ThumbImg>
            <Img src={file ? file : defaultPhoto} alt={type} />

            <NameCategory>{CATEGORY_NAMES[category]}</NameCategory>

            <ButtonCardWrapper>
              <ButtonFavorite onClick={() => handleFavorite(_id)}>
                {isFavorite ? <IconFavorite /> : <IconNotFavorite />}
              </ButtonFavorite>
              {isMyAds && (
                <ButtonTrash onClick={() => showMessage()}>
                  <IconTrash />
                </ButtonTrash>
              )}
            </ButtonCardWrapper>

            <WrapperInfo>
              {location && (
                <Info>
                  <IconLocation />
                  {location.length > 4
                    ? location.slice(0, 5) + '...'
                    : location}
                </Info>
              )}
              <Info>
                <IconClock />
                {agePet}
              </Info>

              <Info>
                {sex === 'male' ? (
                  <>
                    <IconMale /> {sex}
                  </>
                ) : (
                  <>
                    <IconFemale />
                    {sex}
                  </>
                )}
              </Info>
            </WrapperInfo>
          </ThumbImg>

          <Title>{title}</Title>
        </Div>

        <WrapperContent>
          <BtnLearnMore onClick={() => showModal(el)}>Learn more</BtnLearnMore>
        </WrapperContent>
      </Card>

      {isShowModal && (
        <Modal closeModal={closeModal}>
          <DelMessage closeModal={closeModal} id={_id} title={title} />
        </Modal>
      )}
      {isAttention && (
        <Modal closeModal={closeModal}>
          <Attention />
        </Modal>
      )}
    </>
  );
};

export default NoticeCategoryItem;
