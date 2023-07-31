import {
  BtnLearnMore,
  ButtonCardWrapper,
  ButtonFavorite,
  ButtonTrash,
  Card,
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
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/selectors';
import { addFavorite, removeFavorite } from 'redux/Auth/operations';
import { calcAge } from 'utils/calcAge';
import Modal from 'components/Modal/Modal';
import DelMessage from 'components/DelMessage/DelMessage';
import { useState } from 'react';

const NoticeCategoryItem = ({ showModal, el }) => {
  const { date, file, type, category, location, sex, title, _id, owner } = el;

  const [isShowModal, setIsShowModal] = useState(false);

  const { favorite, _id: id } = useSelector(selectUser);
  const dispatch = useDispatch();

  const isMyAds = owner === id;
  const agePet = calcAge(date);
  const isFavorite = favorite.includes(_id);

  const handleFavorite = async id => {
    isFavorite ? dispatch(removeFavorite(id)) : dispatch(addFavorite(id));
  };

  const showMessage = () => setIsShowModal(true);
  const closeModal = () => setIsShowModal(false);

  return (
    <>
      <Card>
        <ThumbImg>
          <Img src={file} alt={type} />
          {category === 'for-free' ? (
            <NameCategory>in good hands</NameCategory>
          ) : (
            <NameCategory>{category}</NameCategory>
          )}

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
            <Info>
              <IconLocation />
              {location.length > 4 ? location.slice(0, 5) + '...' : location}
            </Info>
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
        <WrapperContent>
          <Title>{title}</Title>
          <BtnLearnMore onClick={() => showModal(el)}>Learn more</BtnLearnMore>
        </WrapperContent>
      </Card>
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <DelMessage closeModal={closeModal} id={_id} />
        </Modal>
      )}
    </>
  );
};

export default NoticeCategoryItem;
