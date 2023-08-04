import { React, useState } from 'react';

import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { theme } from 'theme';
import {
  Filter,
  BoxAge,
  FilterTitle,
  FilterTitleBox,
  FilterList,
  BoxGender,
  FilterItem,
  FilterText,
  BoxClose,
  FilterBoxTitle,
} from './NoticesFilterBox.styled';

// const categoryName = {
//   one: false,
//   two: false,
//   three: false,
//   four: false,
//   five: false,
// };

const NoticesFilterBox = ({ closeFilter }) => {
  const [openAge, setOpenAge] = useState(false);
  const [openGender, setOpenGender] = useState(false);
  const [check, setCheck] = useState(false);

  const openFiltersAge = () => {
    setOpenAge(true);
  };
  const openFiltersGender = () => {
    setOpenGender(true);
  };
  const closeFiltersAge = () => {
    setOpenAge(false);
  };
  const closeFiltersGender = () => {
    setOpenGender(false);
  };

  const onCheck = e => {
    console.dir(e.currentTarget);
    setCheck(true);
  };
  const ofCheck = e => {
    console.dir(e.currentTarget);
    setCheck(false);
  };

  return (
    <Filter>
      <FilterTitle onClick={closeFilter}>Filters</FilterTitle>

      {!openAge ? (
        <BoxClose onClick={openFiltersAge}>
          <SpriteIcon
            icon="chevron-down"
            size="24px"
            color={theme.colors.blue}
          />
          <FilterBoxTitle>By age</FilterBoxTitle>
        </BoxClose>
      ) : (
        <BoxAge>
          <FilterTitleBox onClick={closeFiltersAge}>By age</FilterTitleBox>

          <FilterList>
            <FilterItem>
              {check ? (
                <div onClick={ofCheck} name="one" value="one">
                  <SpriteIcon
                    icon="check-round"
                    size="24px"
                    color={theme.colors.blue}
                    name="3-12"
                    value="3-12"
                  />
                </div>
              ) : (
                <div onClick={onCheck} name="one" value="one">
                  <SpriteIcon
                    icon="round"
                    size="24px"
                    color={theme.colors.blue}
                    name="3-12"
                    value="3-12"
                  />
                </div>
              )}
              <FilterText>3-12 m</FilterText>
            </FilterItem>
            <FilterItem>
              {check ? (
                <div onClick={ofCheck} name="two">
                  <SpriteIcon
                    icon="check-round"
                    size="24px"
                    color={theme.colors.blue}
                    // name="1-year"
                    // value=""
                  />
                </div>
              ) : (
                <div onClick={onCheck} name="two">
                  <SpriteIcon
                    icon="round"
                    size="24px"
                    color={theme.colors.blue}
                    // name="1-year"
                    // value=""
                  />
                </div>
              )}
              <FilterText>up to 1 year</FilterText>
            </FilterItem>
            <FilterItem>
              {check ? (
                <div onClick={ofCheck} name="three">
                  <SpriteIcon
                    icon="check-round"
                    size="24px"
                    color={theme.colors.blue}
                    // name="2-year"
                    // value=""
                  />
                </div>
              ) : (
                <div onClick={onCheck} name="three">
                  <SpriteIcon
                    icon="round"
                    size="24px"
                    color={theme.colors.blue}
                    // name="2-year"
                    // value=""
                  />
                </div>
              )}
              <FilterText>up to 2 year</FilterText>
            </FilterItem>
          </FilterList>
        </BoxAge>
      )}

      {!openGender ? (
        <BoxClose onClick={openFiltersGender}>
          <SpriteIcon
            icon="chevron-down"
            size="24px"
            color={theme.colors.blue}
          />
          <FilterBoxTitle>By gender</FilterBoxTitle>
        </BoxClose>
      ) : (
        <BoxGender>
          <FilterTitleBox onClick={closeFiltersGender}>
            By gender
          </FilterTitleBox>

          <FilterList>
            <FilterItem>
              {check ? (
                <div onClick={ofCheck} name="four">
                  <SpriteIcon
                    icon="check-round"
                    size="24px"
                    color={theme.colors.blue}
                  />
                </div>
              ) : (
                <div onClick={onCheck} name="four">
                  <SpriteIcon
                    icon="round"
                    size="24px"
                    color={theme.colors.blue}
                  />
                </div>
              )}
              <FilterText>female</FilterText>
            </FilterItem>
            <FilterItem>
              {check ? (
                <div onClick={ofCheck} name="five">
                  <SpriteIcon
                    icon="check-round"
                    size="24px"
                    color={theme.colors.blue}
                  />
                </div>
              ) : (
                <div onClick={onCheck} name="five">
                  <SpriteIcon
                    icon="round"
                    size="24px"
                    color={theme.colors.blue}
                  />
                </div>
              )}
              <FilterText>male</FilterText>
            </FilterItem>
          </FilterList>
        </BoxGender>
      )}
    </Filter>
  );
};

export default NoticesFilterBox;
