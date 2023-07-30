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

// const data = '27.08.2022';

const calcAge = data => {
  const [day, month, year] = data.split('.');
  const newDateFormat = new Date(`${year}-${month}-${day}`);

  const newDateMs = newDateFormat.getTime();

  const ageMs = Date.now() - newDateMs;

  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const millisecondsInMonth = 24 * 60 * 60 * 1000 * 30.44;
  const formatBdYearsFloor = Math.floor(ageMs / millisecondsInYear);
  const formatBdMonthFloor = Math.floor(ageMs / millisecondsInMonth);

  if (formatBdYearsFloor < 1) {
    if (formatBdMonthFloor <= 1) return `${formatBdMonthFloor} m`;
    if (formatBdMonthFloor > 1) return `${formatBdMonthFloor} m`;
  }

  if (formatBdYearsFloor === 1) return `${formatBdYearsFloor} year`;

  if (formatBdYearsFloor > 1) return `${formatBdYearsFloor} years`;
};

const NoticeCategoryItem = ({ showModal, el }) => {
  const { date, file, type, category, location, sex, title } = el;

  const isFavorite = false;
  const isMyAds = true;

  const agePet = calcAge(date);

  return (
    <Card>
      <ThumbImg>
        <Img src={file} alt={type} />
        <NameCategory>{category}</NameCategory>
        <ButtonCardWrapper>
          <ButtonFavorite>
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
