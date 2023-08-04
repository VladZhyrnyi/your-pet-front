import useWindowWidth from 'hooks/useWindowWidth';

// ================================================
import { React, useState } from 'react';
import {
  FilterBox,
  ButtonNoticeFilter,
  IconFilter,
} from './NoticesFilters.styled';
import NoticesFilterBox from 'components/NoticesFilterBox/NoticesFilterBox';
// ================================================

import { FilterWrapper } from './NoticesFilters.styled';
import AddPetBtn from 'components/AddPetBtn/AddPetBtn';

const NoticesFilters = () => {
  const [open, setOpen] = useState(false);

  const openFilters = () => {
    setOpen(true);
  };
  const closeFilters = () => {
    setOpen(false);
  };

  const viewportWidth = useWindowWidth();

  const isMobile = viewportWidth < 768;

  return (
    <FilterWrapper>
      <FilterBox>
        {!open ? (
          <ButtonNoticeFilter onClick={openFilters}>
            {!isMobile && 'Filter'}
            <IconFilter />
          </ButtonNoticeFilter>
        ) : (
          <NoticesFilterBox closeFilter={closeFilters} />
        )}
      </FilterBox>

      <AddPetBtn />
    </FilterWrapper>
  );
};

export default NoticesFilters;
