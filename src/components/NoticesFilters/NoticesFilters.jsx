import useWindowWidth from 'hooks/useWindowWidth';

import { ButtonAddPet } from 'components/Buttons';

import {
  ButtonNoticeAdd,
  ButtonNoticeFilter,
  Div,
  FilterWrapper,
  IconAdd,
  IconFilter,
} from './NoticesFilters.styled';

const NoticesFilters = () => {
  const viewportWidth = useWindowWidth();

  const isMobile = viewportWidth < 768;

  return (
    <FilterWrapper>
      {!isMobile && (
        <>
          <ButtonNoticeFilter>
            Filter <IconFilter />
          </ButtonNoticeFilter>
          <ButtonNoticeAdd>
            Add Pet <IconAdd />
          </ButtonNoticeAdd>
        </>
      )}
      {isMobile && (
        <>
          <ButtonNoticeFilter>
            <IconFilter />
          </ButtonNoticeFilter>
          <Div>
            <ButtonAddPet>
              <IconAdd />
              Add pet
            </ButtonAddPet>
          </Div>
        </>
      )}
    </FilterWrapper>
  );
};

export default NoticesFilters;
