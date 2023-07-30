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

const NoticeCategoryItem = ({ showModal, el }) => {
  const { date, file, type, category, location, sex, title, _id, owner } = el;

  const { favorite, _id: id } = useSelector(selectUser);
  const dispatch = useDispatch();

  const isMyAds = owner === id;

  const agePet = calcAge(date);

  const isFavorite = favorite.includes(_id);

  const handleFavorite = async id => {
    isFavorite ? dispatch(removeFavorite(id)) : dispatch(addFavorite(id));
  };

  return (
    <Card>
      <ThumbImg>
        <Img src={file} alt={type} />
        <NameCategory>{category}</NameCategory>
        <ButtonCardWrapper>
          <ButtonFavorite onClick={() => handleFavorite(_id)}>
            {isFavorite ? <IconFavorite /> : <IconNotFavorite />}
          </ButtonFavorite>
          {isMyAds && (
            <ButtonTrash>
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
  );
};

export default NoticeCategoryItem;
